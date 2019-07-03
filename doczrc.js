export default {
  title: 'Jstacoder\'s Blog',
  description: 'A place where i can bitch and moan',
  menu: [
   'Home',
    {
      name: 'Blog',
      menu:['test']
    },{
      name:'Projects',
      menu:[
        'TaskList',
        'Calendar Example',
        'Alert Component',
        'CloseButton',
        'Dynamic Component',
        'Gatsby Image',
        {
          name: 'Layouts',
          menu: [
           'Base Page Layout'
          ]
        }
      ],
    },
    {
      name: 'Docs',
      menu: [
       'Flex Examples',
      ]
    },
    {
      name: 'Sites',
      menu: ['test'],
    },
    {
       name: 'gigs',
      menu: ['test']
    },
      'Contact',
    ],
  wrapper: 'src/wrapper',
}