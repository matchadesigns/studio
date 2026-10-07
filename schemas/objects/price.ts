import {defineType} from 'sanity'

export default defineType({
  name: 'price',
  type: 'object',
  title: 'Prix',
  fields: [
    {
      name: 'value',
      type: 'number',
      title: 'Valeur',
    },
  ],
})
