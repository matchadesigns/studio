import {MdHome, MdSettings} from 'react-icons/md'
import type {StructureResolver} from 'sanity/structure'

// Document types with exactly one document, edited at a fixed ID
export const singletonTypes = new Set(['homepage', 'siteSettings'])

export const structure: StructureResolver = S =>
  S.list()
    .title('Contenu')
    .items([
      S.listItem()
        .title("Page d'accueil")
        .id('homepage')
        .icon(MdHome)
        .child(S.document().schemaType('homepage').documentId('homepage')),
      S.listItem()
        .title('Paramètres')
        .id('siteSettings')
        .icon(MdSettings)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings'),
        ),
      S.divider(),
      S.listItem()
        .title('Réalisations')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Réalisations')),
      ...S.documentTypeListItems().filter(
        item =>
          !singletonTypes.has(item.getId() ?? '') && item.getId() !== 'project',
      ),
    ])
