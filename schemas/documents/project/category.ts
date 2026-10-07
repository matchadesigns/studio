import {FaLayerGroup} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectCategory',
  title: 'Catégorie de projet',
  type: 'document',
  icon: FaLayerGroup,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la catégorie de projet',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: "Cliquez sur 'Generate' pour créer automatiquement le slug",
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
})
