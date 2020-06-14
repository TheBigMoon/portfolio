import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bloggy-api.herokuapp.com/'
});

export const API = {
  async getPosts() {
    return await instance.get('posts')
      .then((response) => response.data);
  },
  async getPost(id: number) {
    return await instance.get(`posts/${id}?_embed=comments`)
      .then((response) => response.data);
  },
  async deletePost(id: number) {
    await instance.delete(`posts/${id}`);
  },
  async updatePost(postId: number, title: string, body: string) {
    await instance.put(`posts/${postId}`, { title, body });
  },
  async createPost(title: string, body: string) {
    await instance.post('posts', { title, body });
  },
  async createComment(postId: number, body: string) {
    await instance.post('comments', { postId, body });
  }
};
