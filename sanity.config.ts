import {colorInput} from '@sanity/color-input'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'
import {singletonTypes, structure} from './structure'

// Singletons can only be edited and published, not created, duplicated or deleted
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'Mâtcha Designs',
  projectId: 'w9xbrx0s',
  dataset: 'production',
  plugins: [structureTool({structure}), colorInput()],
  schema: {
    types: schemaTypes,
    templates: templates =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (actions, {schemaType}) =>
      singletonTypes.has(schemaType)
        ? actions.filter(({action}) => action && singletonActions.has(action))
        : actions,
  },
})
