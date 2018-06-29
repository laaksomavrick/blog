import { get, post } from '../utils/http';

export const getPosts = async () => {
    const response = await get('posts')
    const json = await response.json()
    return json
} 