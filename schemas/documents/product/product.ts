import {format, parseISO} from 'date-fns'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Produit',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: "Cliquez sur 'Generate' pour créer automatiquement le slug",
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: [{type: 'productCategory'}],
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
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Prix',
      description: 'En euros TTC',
      name: 'price',
      type: 'price',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'deliveryTime',
      title: 'Délai de livraison',
      description:
        'Laisser vide pour afficher le délai de livraison par défaut (1 semaine).',
      type: 'string',
    }),
    defineField({
      title: 'Poids (g)',
      name: 'weight',
      type: 'number',
    }),
    defineField({
      title: 'Stock restant',
      description: 'Vous devez tenir à jour vous-mêmes cette valeur.',
      name: 'sku',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Code produit (référence unique)',
      name: 'barcode',
      type: 'barcode',
    }),
    defineField({
      title: 'Variants',
      name: 'variants',
      type: 'array',
      of: [defineArrayMember({title: 'Variant', type: 'productVariant'})],
    }),
    defineField({
      title: 'Date de publication/réalisation',
      name: 'publishedAt',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Tags',
      description: 'Tapez un tag et appuyez sur "Entrée" pour le valider',
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      title: 'Affichage en page boutique',
      name: 'displayInShop',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      media: 'images.0.asset',
      date: 'publishedAt',
    },
    prepare({title, category, date, media}) {
      return {
        title,
        subtitle: [category, date && format(parseISO(date), 'dd/MM/yyyy')]
          .filter(Boolean)
          .join(', '),
        media,
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
