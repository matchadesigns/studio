import {MdSettings} from 'react-icons/md'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Paramètres',
  icon: MdSettings,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 3,
    }),
    defineField({
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your site.',
      of: [defineArrayMember({type: 'string'})],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'instagram',
      type: 'string',
      title: 'Instagram',
      description: '@username',
    }),
    defineField({
      name: 'facebook',
      type: 'string',
      title: 'Facebook',
      description: '@username',
    }),
    defineField({
      name: 'topMessage',
      type: 'text',
      title: 'Message en haut de site',
      rows: 3,
    }),
    defineField({
      name: 'isFreeShipping',
      type: 'boolean',
      title: 'Offrir les frais de port',
    }),
  ],
})
