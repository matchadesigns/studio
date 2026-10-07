import {FaLayerGroup} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'productVariantGroup',
  title: 'Groupe de variantes',
  type: 'document',
  icon: FaLayerGroup,
  fields: [
    defineField({
      name: 'ref',
      title: 'Référence interne du groupe',
      description: 'Exemples : Senteur de la bougie, Contenance de la bougie',
      type: 'string',
    }),
    defineField({
      name: 'option',
      title: 'Option (affichée sur le site)',
      description: 'Exemples : Couleur, Senteur, Contenance, ...',
      type: 'string',
    }),
  ],
})
