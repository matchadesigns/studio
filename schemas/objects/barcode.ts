import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'barcode',
  title: 'Barcode',
  type: 'object',
  fields: [
    defineField({
      name: 'barcode',
      title: 'Barcode',
      type: 'string',
    }),
  ],
})
