import {format, parseISO} from 'date-fns'

export default {
  name: 'project',
  title: 'Projet',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      description: "Cliquez sur 'Generate' pour créer automatiquement le slug",
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: document => {
          const {category} = document
          return category &&
            category._ref &&
            category._ref === '16855d50-a05d-4585-9fb2-f05b60a76899' // decoration-interieur
            ? `${document.title} ${document.subtitle}`
            : document.title
        },
        maxLength: 96
      }
    },
    {
      name: 'category',
      title: 'Catégorie',
      description: "Exemple : Décoration d'intérieur",
      type: 'reference',
      to: [{type: 'projectCategory'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Contenu',
      type: 'projectPortableText'
    },
    {
      name: 'productCategory',
      title: 'Catégorie de produit associée',
      description: "Permet d'ajouter un lien 'Shopper' depuis le projet",
      type: 'reference',
      to: [{type: 'productCategory'}]
    },
    {
      name: 'publishedAt',
      title: 'Date de publication / réalisation',
      type: 'date'
    },
    {
      name: 'cardBgColor',
      type: 'color',
      title: 'Couleur de fond de la prévisualisation'
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      categorySlug: 'category.slug',
      media: 'images.0.asset'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, categorySlug = {}, media}) {
      const dateSegment = format(parseISO(publishedAt), 'yyyy/MM')
      return {
        title,
        media,
        subtitle: publishedAt
          ? `/${categorySlug.current}/${slug.current}/ - ${dateSegment}`
          : 'Date de publication / réalisation manquant'
      }
    }
  },
  orderings: [
    {
      title: 'Date de publication, nouveaux',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}]
    }
  ]
}
