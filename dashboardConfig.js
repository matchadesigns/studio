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
            title: 'Site web',
            value: 'https://matchadesigns.com',
            category: 'apps'
          },
          {
            title: 'Déploiement',
            value:
              'https://api.zeit.co/v1/integrations/deploy/QmTdb7Hgf1EMafNJUwaw6aqndzwschFRyaTk5nZiQuS4yK/TGVqk2pFc2',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}}
  ]
}
