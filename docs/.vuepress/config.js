module.exports = {
  title: 'FRUCHTFOLGE',
  description: 'Dokumentation der Fruchtfolge Anwendung',
  head: [
    ['link', { rel: 'icon', href: '../img/favicon.ico' }]
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
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/', "Los Geht's"],
          ['/guide/overview', 'Übersicht'],
          ['/guide/import', 'Daten importieren'],
          ['/guide/add_plot', 'Schläge hinzufügen'],
          ['/guide/change_plots', 'Schläge bearbeiten']
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
