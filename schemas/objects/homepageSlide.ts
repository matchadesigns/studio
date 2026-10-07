import {MdViewCarousel} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepageSlide',
  title: 'Diapositive',
  type: 'object',
  icon: MdViewCarousel,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required().max(80),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string',
      validation: Rule => Rule.max(120),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'figure',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Lien (optionnel)',
      description:
        'Page vers laquelle renvoie la diapositive, ex. /boutique/affiches ou https://…',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'subtitle', media: 'image'},
  },
})
