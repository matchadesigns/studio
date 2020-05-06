export default {
  title: 'Variantes',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Groupe de variantes',
      name: 'variantGroup',
      description: 'Pensez à créer un groupe de variantes avant !',
      type: 'reference',
      to: {type: 'productVariantGroup'}
    },
    {
      title: 'Valeur',
      description: 'Exemple: "Cuivré", Monoï"...',
      name: 'value',
      type: 'string'
    }
  ],
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
}
