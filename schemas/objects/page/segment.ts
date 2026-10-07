import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Segment de page',
  name: 'pageSegment',
  type: 'object',
  fields: [
    defineField({
      title: 'Identifiant interne',
      description: 'Exemple: prestations-gamme-produits',
      name: 'internalID',
      type: 'string',
    }),
    defineField({
      title: 'Titre',
      description: 'Titre du segment',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Corps',
      name: 'body',
      type: 'blockContent',
    }),
  ],
})
