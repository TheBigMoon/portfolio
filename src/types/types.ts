import {
  CLEAR_DELETED_POST,
  CREATE_COMMENT,
  CREATE_POST,
  DELETE_POST,
  GET_POST,
  GET_POSTS, SET_CREATED_COMMENT, SET_CREATED_POST,
  SET_POST,
  SET_POSTS, SET_UPDATED_POST,
  UPDATE_POST
} from "../store/postReducer";

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
export type UpdatePostType = {type: typeof UPDATE_POST, postId: number, title: string, body: string}
export type SetUpdatedPostType = {type: typeof SET_UPDATED_POST, postId: number, title: string, body: string}
export type DeletePostType = {type: typeof DELETE_POST, postId: number}
export type ClearDeletedPostType = {type: typeof CLEAR_DELETED_POST, postId: number}
export type CreatePostType = {type: typeof CREATE_POST, title: string, body: string}
// Под вопросом: надо ли SetCreatedPostType вообще? Или можно просто сделать запрос на обновление постов
export type SetCreatedPostType = {type: typeof SET_CREATED_POST, title: string, body: string}
export type CreateCommentType = {type: typeof CREATE_COMMENT, postId: number, body: string}
// Под вопросом: надо ли SetCreatedCommentType вообще? Или можно просто сделать запрос на обновление комментов
export type SetCreatedCommentType = {type: typeof SET_CREATED_COMMENT, postId: number, body: string}

