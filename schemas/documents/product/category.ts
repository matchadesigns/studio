import {FaLayerGroup} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'productCategory',
  title: 'Catégorie de produit',
  type: 'document',
  icon: FaLayerGroup,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la catégorie de produit',
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
    defineField({
      name: 'order',
      title: 'Ordre',
      description:
        "Entier permettant de définir l'ordre d'affichage des catégories",
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'DisplayOrder, Asc',
      name: 'displayOrderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
