import {MdContentPaste} from 'react-icons/md'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: MdContentPaste,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la page',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'body',
      title: 'Corps',
      type: 'blockContent',
    }),
    defineField({
      title: 'Segments',
      name: 'segments',
      type: 'array',
      of: [defineArrayMember({title: 'Segment', type: 'pageSegment'})],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [defineArrayMember({type: 'image'})],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
