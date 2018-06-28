import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    body: String,
}, {
    timestamps: true
});

export const Post = mongoose.model('Post', postSchema);