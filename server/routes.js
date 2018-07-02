import express from 'express'
import * as Models from './schema';

let router = express.Router()

router.get('/posts', async (req, res, next) => {
    try {
        const { page, limit } = req.query
        const posts = await Models.Post
            .find()
            .skip(page * limit)
            .limit(parseInt(limit))
            .sort({createdAt: 'desc'})
        res.send(posts)
    } catch (err) {
        next(err)
    }
});

router.get('/posts/count', async (req, res, next) => {
    try {
        const count = await Models.Post.count({})
        res.send({count})
    } catch (err) {
        console.log(err)
        next(err)
    }
});

router.post('/posts', async (req, res, next) => {
    try {
        const { body } = req;
        const post = new Models.Post(body);
        await post.save();
        res.send(post);
    } catch (err) {
        next(err);
    }
})

export default router
