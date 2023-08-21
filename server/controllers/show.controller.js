const TvShow = require('../models/show.model')
module.exports = {
    // ! Getting all tvShows
    getAllTvShows: (req, res) => {
        // some logic 
        TvShow.find({})
            .then((allTvShows) => {
                res.status(200).json(allTvShows)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // ! Gettin one tvShow
    getOneTvShow: (req, res) => {
        console.log(req.params.id);
        const id = req.params.id
        TvShow.findById(id)
            .then((oneTvShow) => {
                res.status(200).json(oneTvShow)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // ! Creating a new tvShow
    createTvShow: (req, res) => {
        console.log(req.body);
        TvShow.create(req.body)
            .then((newTvShow) => {
                res.status(201).json(newTvShow)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // ! Update an tvShow 
    updateTvShow: (req, res) => {
        const id = req.params.id
        TvShow.findOneAndUpdate(
            {_id: id},
            req.body,
            {new:true, runValidators:true}
        )
            .then((updatedTvShow) => {
                res.status(201).json(updatedTvShow)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // ! Delete an tvShow
    deleteTvShow: (req, res) => {
        const id = req.params.id
        TvShow.deleteOne({_id: id})
            .then((result) => {
                res.status(204).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}