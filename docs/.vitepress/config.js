export default {
  title: 'Craft Toolbelt',
  description: 'Template utility tools for #craftcms projects',
  themeConfig: {
    logo: '/zaengle.svg',
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'GitHub', link: 'https://github.com/zaengle/craft-toolbelt' },
      { text: 'Open an issue', link: 'https://github.com/zaengle/craft-toolbelt/issues' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Installation', link: '/00-installation' },
        ]
      },{
        text: 'Usage',
        items: [
          { text: 'Utility Functions', link: '/01-utility-fns' },
          { text: 'Query / Collection Helpers', link: '/02-query-helpers' },
          { text: 'Eager Loading Helpers', link: '/03-eager-loading-helpers' },
          { text: 'Debugging Helpers', link: '/04-debugging-helpers' },
          { text: 'Operators', link: '/05-operators' },
        ]
      },
      {
        text: 'Made with ❤️ by Zaengle',
        items: [
          { text: 'Be Nice, Do Good', link: 'https://zaengle.com/'},
          { text: 'MIT Licensed', link: 'https://mit-license.org/'},
        ],
      }
    ]
  }
};
