import { get, post } from '../utils/http';

export const getPosts = async (page, limit) => {
    try {
        const data = { page, limit }
        const response = await get('posts', data)
        const json = await response.json()
        return json
    } catch (e) {
        console.error(e)
        return null
    }
} 

export const getPostsCount = async () => {
    try {
        const response = await get('posts/count')
        const json = await response.json()
        return json
    } catch (e) {
        console.error(e)
        return null
    }
} 

export const createPost = async (data) => {
    try {
        const response = await post('posts', data)
        const json = await response.json()
        return json
    } catch (e) {
        console.error(e)
        return null
    }
}