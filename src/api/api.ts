import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bloggy-api.herokuapp.com/'
})

export const API = {
  async getPosts() {
    return await instance.get('posts')
      .then(response => response.data)
  },
  async getPost(id: number) {
    return await instance.get(`posts/${id}?_embed=comments`)
      .then(response => response.data)
  },
  async deletePost(id: number) {
    return await instance.delete(`posts/${id}`)
  },
  async updatePost(id: number, title: string, body: string) {
    return await instance.put(`posts/${id}`, {title, body})
  },
  async createPost(title: string, body: string) {
    return await instance.post('posts', {title, body})
  },
  async createComment(postId: number, body: string) {
    return await instance.post(`comments`, {postId, body})
  }
}