import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Variantes',
  name: 'productVariant',
  type: 'object',
  fields: [
    defineField({
      title: 'Groupe de variantes',
      name: 'variantGroup',
      description: 'Pensez à créer un groupe de variantes avant !',
      type: 'reference',
      to: [{type: 'productVariantGroup'}],
    }),
    defineField({
      title: 'Valeur',
      description: 'Exemple: "Cuivré", Monoï"...',
      name: 'value',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      option: 'variantGroup.option',
      value: 'value',
    },
    prepare({option, value}) {
      return {
        title: `${option} : ${value}`,
      }
    },
  },
})
