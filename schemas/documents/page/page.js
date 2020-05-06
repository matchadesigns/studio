import {MdContentPaste} from 'react-icons/md'
export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: MdContentPaste,
  fields: [
    {
      name: 'title',
      title: 'Titre de la page',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      // validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'body',
      title: 'Corps',
      type: 'blockContent'
    },
    {
      title: 'Segments',
      name: 'segments',
      type: 'array',
      of: [
        {
          title: 'Segment',
          type: 'pageSegment'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
