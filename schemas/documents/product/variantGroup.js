import {FaLayerGroup} from 'react-icons/fa'

export default {
  name: 'productVariantGroup',
  title: 'Groupe de variantes',
  type: 'document',
  icon: FaLayerGroup,
  fields: [
    {
      name: 'ref',
      title: 'Référence interne du groupe',
      description: 'Exemples : Senteur de la bougie, Contenance de la bougie',
      type: 'string'
    },
    {
      name: 'option',
      title: 'Option (affichée sur le site)',
      description: 'Exemples : Couleur, Senteur, Contenance, ...',
      type: 'string'
    }
  ]
}
