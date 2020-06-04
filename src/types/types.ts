import {GET_POST, GET_POSTS, SET_POST, SET_POSTS} from "../store/postReducer";

// PostReducer types
export type CommentType = {
  id: number,
  postId: number,
  body: string
}
export type PostType = {
  id: number,
  title: string,
  body: string,
  comments?: Array<CommentType>
}
export type StateType = {
  posts: Array<PostType> | null,
  post: PostType | null
}
export type ActionType = GetPostsType | SetPostsType | GetPostType | SetPostType

// Action types
export type GetPostsType = {type: typeof GET_POSTS}
export type SetPostsType = {type: typeof SET_POSTS, posts: Array<PostType>}
export type GetPostType = {type: typeof GET_POST, id: number}
export type SetPostType = {type: typeof SET_POST, post: PostType}
