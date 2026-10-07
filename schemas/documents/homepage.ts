import {MdHome} from 'react-icons/md'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: "Page d'accueil",
  type: 'document',
  icon: MdHome,
  fields: [
    defineField({
      name: 'slides',
      title: 'Carrousel',
      description:
        "Diapositives affichées en haut de la page d'accueil, dans cet ordre. Glissez-déposez pour réordonner.",
      type: 'array',
      of: [defineArrayMember({type: 'homepageSlide'})],
      validation: Rule => Rule.min(1),
    }),
  ],
  preview: {
    prepare: () => ({title: "Page d'accueil"}),
  },
})
