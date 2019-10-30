module.exports = {
  base: '/documentation/',
  title: 'Fruchtfolge',
  description: 'Dokumentation der Fruchtfolge Anwendung',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: `/icons/favicon.ico` }]
  ],
  evergreen: true,
  themeConfig: {
    nav: [
      { text: 'Zurück zur Fruchtfolge Anwendung', link: 'http://fruchtfolge.agp.uni-bonn.de' },
    ],
    sidebar: [
      {
        title: 'Anleitung',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        children: [
          ['/', "Los Geht's"],
          ['/guide/overview', 'Übersicht'],
          ['/guide/import', 'Daten importieren'],
          ['/guide/plots', 'Schläge verwalten'],
        ]
      },
      {
        title: 'Videos',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/videos/videos', "Schulungsvideos"]
        ]
      },
      {
        title: 'FAQ',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
          ['/faq/faq', "Häufig gestellte Fragen"]
        ]
      }
      /*
      ['/', 'Anleitung'],
      ['/guide/login', 'Einloggen'],
      ['/guide/overview', 'Programmübersicht'],
      ['/guide/import', 'Daten importieren'],
      ['/guide/add_plot', 'Schläge hinzufügen'],
      ['/guide/change_plots', 'Schläge bearbeiten'],
      */
    ]
  }
}
