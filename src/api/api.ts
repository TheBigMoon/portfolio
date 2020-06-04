import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bloggy-api.herokuapp.com/'
})

const API = {
  getPosts() {
    return instance.get('posts')
  },
  getPost(id: number) {
    return instance.get(`${id}?_embed=comments`)
  }
}