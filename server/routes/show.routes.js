const TvShowController = require("../controllers/show.controller")


module.exports = (app) => {
    app.get('/api/allTvShows', TvShowController.getAllTvShows)
    app.get('/api/oneTvShow/:id', TvShowController.getOneTvShow)
    app.post('/api/newTvShow', TvShowController.createTvShow)
    app.put('/api/updateTvShow/:id', TvShowController.updateTvShow)
    app.delete('/api/deleteTvShow/:id', TvShowController.deleteTvShow)
}