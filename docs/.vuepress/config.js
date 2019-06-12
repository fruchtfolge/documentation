module.exports = {
  title: 'FRUCHTFOLGE',
  description: 'Dokumentation der Fruchtfolge Anwendung',
  evergreen: true,
  themeConfig: {
    nav: [
      { text: 'Zurück zur Anwendung', link: 'http://fruchtfolge.agp.uni-bonn.de' },
    ],
    sidebar: [
      ['/', 'Einführung'],
      ['/guide/login', 'Einloggen'],
      ['/guide/overview', 'Programmübersicht'],
      ['/guide/import', 'Daten importieren'],
      ['/guide/add_plot', 'Schläge hinzufügen'],
      ['/guide/change_plots', 'Schläge bearbeiten'],
    ]
  }
}
