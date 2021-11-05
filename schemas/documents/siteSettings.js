export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 3
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your site.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'instagram',
      type: 'string',
      title: 'Instagram',
      description: '@username'
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook',
      description: '@username'
    },
    {
      name: 'topMessage',
      type: 'text',
      title: 'Message en haut de site',
      rows: 3
    },
    {
      name: 'isFreeShipping',
      type: 'boolean',
      title: 'Offrir les frais de port'
    }
  ]
}
