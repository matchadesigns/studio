import {format, parseISO} from 'date-fns'
import {
  defineArrayMember,
  defineField,
  defineType,
  type Reference,
} from 'sanity'

// Interior design projects get their subtitle in the slug
const INTERIOR_DESIGN_CATEGORY_ID = '16855d50-a05d-4585-9fb2-f05b60a76899'

export default defineType({
  name: 'project',
  title: 'Projet',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: "Cliquez sur 'Generate' pour créer automatiquement le slug",
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: document => {
          const {title, subtitle, category} = document as {
            title?: string
            subtitle?: string
            category?: Reference
          }
          return category?._ref === INTERIOR_DESIGN_CATEGORY_ID
            ? `${title} ${subtitle}`
            : (title ?? '')
        },
        maxLength: 96,
      },
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      description: "Exemple : Décoration d'intérieur",
      type: 'reference',
      to: [{type: 'projectCategory'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [defineArrayMember({type: 'image', options: {hotspot: true}})],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Contenu',
      type: 'projectPortableText',
    }),
    defineField({
      name: 'productCategory',
      title: 'Catégorie de produit associée',
      description: "Permet d'ajouter un lien 'Shopper' depuis le projet",
      type: 'reference',
      to: [{type: 'productCategory'}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication / réalisation',
      type: 'date',
    }),
    defineField({
      name: 'cardBgColor',
      type: 'color',
      title: 'Couleur de fond de la prévisualisation',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug.current',
      categorySlug: 'category.slug.current',
      media: 'images.0.asset',
    },
    prepare({title = 'No title', publishedAt, slug, categorySlug, media}) {
      return {
        title,
        media,
        subtitle: publishedAt
          ? `/${categorySlug}/${slug}/ - ${format(parseISO(publishedAt), 'yyyy/MM')}`
          : 'Date de publication / réalisation manquant',
      }
    },
  },
  orderings: [
    {
      title: 'Date de publication, nouveaux',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
})
