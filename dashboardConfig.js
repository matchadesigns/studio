export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'document-list',
      options: {title: 'Projet récents', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    },
    {
      name: 'document-list',
      options: {title: 'Produits récents', order: '_createdAt desc', types: ['product']},
      layout: {width: 'medium'}
    },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matchadesigns/matcha',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://matchadesigns.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}}
  ]
}
