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
                  buildHookId: '5ee93a8e5c860599bef6eccb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-x36atnbu',
                  apiId: '22dab13b-a2bd-4360-b936-4336c4bbb3fc'
                },
                {
                  buildHookId: '5ee93a8e1c9ea554e4ece163',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-npb7mo4p',
                  apiId: 'ff94ea27-f451-4f66-9071-2637cacd7655'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanarp/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-npb7mo4p.netlify.app', category: 'apps'}
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
