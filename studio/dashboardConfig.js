export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '609f9fc5078f19b0487d624e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mneignjh',
                  apiId: 'b3fb9bc0-1e78-4e49-8580-476cf28bcd6a'
                },
                {
                  buildHookId: '609f9fc6616dfbe1b751f077',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-a8exov5c',
                  apiId: '53a67b0e-578b-47a3-b305-98e6f08346c1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ronakiihglobal/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-a8exov5c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
