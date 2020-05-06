import {FaLayerGroup} from 'react-icons/fa'

export default {
  name: 'projectCategory',
  title: 'Catégorie de projet',
  type: 'document',
  icon: FaLayerGroup,
  fields: [
    {
      name: 'title',
      title: 'Titre de la catégorie de projet',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      description: "Cliquez sur 'Generate' pour créer automatiquement le slug",
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }
  ]
}
