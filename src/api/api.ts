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
    return await instance.get(`${id}?_embed=comments`)
      .then(response => response.data)
  }
}