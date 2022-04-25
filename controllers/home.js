const getHomeArticles = (req, res, next) => {
  // execution du code pour récupérer les articles
  // ici on déclare un tableau en dur, en réalité
  // on utiliserait le model qui irait chercher les
  // articles en base de données
  const articles = [
    {
      id: 1,
      title: "News 1"
    },
    {
      id: 2,
      title: "News 2"
    }
  ]

  res.render('home', {
    articles: articles
  })
}

module.exports = {
  getHomeArticles
}