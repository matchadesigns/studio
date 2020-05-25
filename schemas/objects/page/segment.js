export default {
  title: 'Segment de page',
  name: 'pageSegment',
  type: 'object',
  fields: [
    {
      title: 'Identifiant interne',
      description: 'Exemple: prestations-gamme-produits',
      name: 'internalID',
      type: 'string'
    },
    {
      title: 'Titre',
      description: 'Titre du segment',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Corps',
      name: 'body',
      type: 'blockContent'
    }
  ]
  /*
  preview: {
    select: {
      option: 'variantGroup.option',
      value: 'value'
    },
    prepare (selection) {
      const {option, value} = selection
      return {
        title: `${option} : ${value}`
      }
    }
  }
  */
}
