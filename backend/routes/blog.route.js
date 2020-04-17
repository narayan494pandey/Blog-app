let mongoose = require('mongoose');
express = require('express');
router = express.Router();


//Blog model

let blogSchema = require('../models/Blog');

//Cretae Blog

router.route('/create-blog').post((req, res, next) => {
    blogSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })

});


//read blog
router.route('/').get((req, res) => {
    blogSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })

});

//get single blog
router.route('/edit-blog/:id').get((req, res, next) => {
    blogSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })

});
//update Blog
router.route('/update-blog/:id').put((req, res, next) => {
    blogSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
            console.log('Blog updated !');
        }
    })

});

//delete Blog


router.route('/delete-blog/:id').delete((req, res, next) => {
    blogSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })

        }
    })

});


module.exports = router;


