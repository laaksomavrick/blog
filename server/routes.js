import express from 'express'
import * as Models from './schema';

let router = express.Router()

router.get('/posts', async (req, res) => {
    try {
        const posts = await Models.Post.find().sort({createdAt: 'desc'})
        res.send(posts)
    } catch (err) {
        next(err)
    }
});

router.post('/post', async (req, res, next) => {
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
