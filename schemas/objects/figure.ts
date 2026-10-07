import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      title: 'Caption',
      name: 'caption',
      type: 'string',
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: Rule =>
        Rule.required().error('You have to fill out the alternative text.'),
      description: 'Important for SEO and accessiblity.',
    }),
  ],
  preview: {
    select: {
      media: 'asset',
      title: 'caption',
    },
  },
})
