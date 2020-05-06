import S from '@sanity/desk-tool/structure-builder'
import {FcSettings} from 'react-icons/fc'

const hiddenDocTypes = listItem =>
  !['category', 'person', 'sampleProject', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Paramètres')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(FcSettings),
      S.listItem()
        .title('Réalisations')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Réalisations')),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
