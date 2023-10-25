import { parseISO, format } from "date-fns";

export default {
  name: "product",
  title: "Produit",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      description: "Cliquez sur 'Generate' pour créer automatiquement le slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "category",
      title: "Catégorie",
      type: "reference",
      to: [{ type: "productCategory" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Prix",
      description: "En euros TTC",
      name: "price",
      type: "price",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "deliveryTime",
      title: "Délai de livraison",
      description: "Laisser vide pour afficher le délai de livraison par défaut (1 semaine).",
      type: "string",
    },
    {
      title: "Poids (g)",
      name: "weight",
      type: "number",
    },
    /*
    {
      title: 'Dimensions',
      name: 'dimensions',
      type: 'string'
    },
    */
    {
      title: "Stock restant",
      description: "Vous devez tenir à jour vous-mêmes cette valeur.",
      name: "sku",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Code produit (référence unique)",
      name: "barcode",
      type: "object",
      fields: 
      [{
        name: 'barcode',
        title: 'Barcode',
        type: 'string'
      }],
    },
    {
      title: "Variants",
      name: "variants",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "productVariant",
        },
      ],
    },
    {
      title: "Date de publication/réalisation",
      name: "publishedAt",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Tags",
      description: 'Tapez un tag et appuyez sur "Entrée" pour le valider',
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      title: "Affichage en page boutique",
      name: "displayInShop",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category.title",
      media: "images.0.asset",
      date: "publishedAt",
    },
    prepare(selection) {
      const { title, category, date, media } = selection;
      return {
        title,
        subtitle: `${category}, ${format(parseISO(date), "dd/MM/yyyy")}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Date de publication, nouveaux",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
};
