import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Spinner,
  Stack,
  Text,
  TextInput,
} from '@sanity/ui'
import {useToast} from '@sanity/ui/toast'
import {useCallback, useEffect, useState} from 'react'
import {MdRocketLaunch} from 'react-icons/md'
import {useClient, useCurrentUser} from 'sanity'

// Stored under a `secrets.` path, so it's only readable by logged-in users
// and never ends up in the public studio bundle
const SECRET_ID = 'secrets.vercelDeploy'
const HOOK_PREFIX = 'https://api.vercel.com/v1/integrations/deploy/'

interface DeploySecret {
  hookUrl?: string
  lastTriggeredAt?: string
  lastTriggeredBy?: string
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString('fr-FR', {
    dateStyle: 'long',
    timeStyle: 'short',
  })

export function DeployTool() {
  const client = useClient({apiVersion: '2025-08-15'})
  const user = useCurrentUser()
  const toast = useToast()
  const [secret, setSecret] = useState<DeploySecret>()
  const [hookInput, setHookInput] = useState('')
  const [editingHook, setEditingHook] = useState(false)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    client
      .getDocument<DeploySecret & {_id: string; _type: string}>(SECRET_ID)
      .then(doc => setSecret(doc ?? {}))
      .catch(() => setSecret({}))
  }, [client])

  const saveHook = useCallback(async () => {
    const hookUrl = hookInput.trim()
    if (!hookUrl.startsWith(HOOK_PREFIX)) {
      toast.push({
        status: 'error',
        title: `L'URL doit commencer par ${HOOK_PREFIX}`,
      })
      return
    }
    setBusy(true)
    try {
      await client
        .transaction()
        .createIfNotExists({_id: SECRET_ID, _type: 'vercelDeploySecret'})
        .patch(SECRET_ID, p => p.set({hookUrl}))
        .commit()
      setSecret(prev => ({...prev, hookUrl}))
      setEditingHook(false)
      setHookInput('')
      toast.push({status: 'success', title: 'Lien de déploiement enregistré'})
    } catch (err) {
      toast.push({
        status: 'error',
        title: "Impossible d'enregistrer le lien",
        description: String(err),
      })
    } finally {
      setBusy(false)
    }
  }, [client, hookInput, toast])

  const deploy = useCallback(async () => {
    if (!secret?.hookUrl) return
    setBusy(true)
    try {
      const res = await fetch(secret.hookUrl, {method: 'POST'})
      if (!res.ok) throw new Error(`Vercel a répondu ${res.status}`)
      const lastTriggeredAt = new Date().toISOString()
      const lastTriggeredBy = user?.name ?? user?.email ?? ''
      await client
        .patch(SECRET_ID)
        .set({lastTriggeredAt, lastTriggeredBy})
        .commit()
      setSecret(prev => ({...prev, lastTriggeredAt, lastTriggeredBy}))
      toast.push({
        status: 'success',
        title: 'Mise en ligne lancée',
        description: 'Le site sera à jour dans quelques minutes.',
      })
    } catch (err) {
      toast.push({
        status: 'error',
        title: 'La mise en ligne a échoué',
        description: String(err),
      })
    } finally {
      setBusy(false)
    }
  }, [client, secret?.hookUrl, toast, user])

  if (secret === undefined) {
    return (
      <Flex align="center" justify="center" padding={5}>
        <Spinner muted />
      </Flex>
    )
  }

  const showHookForm = !secret.hookUrl || editingHook

  return (
    <Container width={1} padding={4} paddingTop={5}>
      <Stack gap={5}>
        <Stack gap={3}>
          <Heading as="h1" size={2}>
            Mettre en ligne le site
          </Heading>
          <Text muted>
            Les modifications publiées dans le studio n&apos;apparaissent sur
            matchadesigns.com qu&apos;après une mise en ligne. Elle prend
            quelques minutes.
          </Text>
        </Stack>

        {secret.hookUrl && (
          <Card padding={4} radius={3} shadow={1}>
            <Stack gap={4}>
              <Button
                icon={MdRocketLaunch}
                text="Mettre en ligne"
                tone="primary"
                fontSize={2}
                padding={4}
                loading={busy}
                onClick={deploy}
              />
              {secret.lastTriggeredAt && (
                <Text size={1} muted>
                  Dernière mise en ligne lancée le{' '}
                  {formatDate(secret.lastTriggeredAt)}
                  {secret.lastTriggeredBy && ` par ${secret.lastTriggeredBy}`}
                </Text>
              )}
            </Stack>
          </Card>
        )}

        {showHookForm ? (
          <Card padding={4} radius={3} tone="caution" border>
            <Stack gap={3}>
              <Text weight="semibold">Lien de déploiement Vercel</Text>
              <Text size={1} muted>
                Vercel → projet matcha → Settings → Git → Deploy Hooks.
              </Text>
              <Flex gap={2}>
                <Box flex={1}>
                  <TextInput
                    value={hookInput}
                    placeholder={`${HOOK_PREFIX}…`}
                    onChange={e => setHookInput(e.currentTarget.value)}
                  />
                </Box>
                <Button
                  text="Enregistrer"
                  mode="ghost"
                  disabled={!hookInput.trim() || busy}
                  onClick={saveHook}
                />
              </Flex>
            </Stack>
          </Card>
        ) : (
          <Box>
            <Button
              text="Modifier le lien de déploiement"
              mode="bleed"
              fontSize={1}
              onClick={() => setEditingHook(true)}
            />
          </Box>
        )}
      </Stack>
    </Container>
  )
}
