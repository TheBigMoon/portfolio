import {
  ActionType,
  GetPostType,
  GetPostsType,
  SetPostType,
  SetPostsType,
  PostType,
  StateType,
  UpdatePostType,
  DeletePostType,
  CreatePostType,
  CreateCommentType, SetUpdatedPostType, ClearDeletedPostType, SetCreatedPostType
} from "../types/types";

export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS = 'SET_POSTS';
export const GET_POST = 'GET_POST';
export const SET_POST = 'SET_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const SET_UPDATED_POST = 'SET_UPDATED_POST';
export const DELETE_POST = 'DELETE_POST';
export const CLEAR_DELETED_POST = 'CLEAR_DELETED_POST';
export const CREATE_POST = 'CREATE_POST';
export const SET_CREATED_POST = 'SET_CREATED_POST';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const SET_CREATED_COMMENT = 'SET_CREATED_COMMENT';


const initialState: StateType = {
  posts: null,
  post: null
}

export const postReducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: action.posts
      }
    }
    case SET_POST: {
      return {
        ...state,
        post: action.post
      }
    }
    default: {
      return state;
    }
  }
}

export const getPosts = (): GetPostsType => ({type: GET_POSTS})
export const setPosts = (posts: Array<PostType>): SetPostsType => ({type: SET_POSTS, posts})
export const getPost = (id: number): GetPostType => ({type: GET_POST, id})
export const setPost = (post: PostType): SetPostType => ({type: SET_POST, post})
export const deletePost = (postId: number): DeletePostType => ({type: DELETE_POST, postId})
export const clearDeletedPost = (postId: number): ClearDeletedPostType => ({type: CLEAR_DELETED_POST, postId})
export const createPost = (title: string, body: string): CreatePostType => ({type: CREATE_POST, title, body})
// Под вопросом: надо ли setCreatedPost вообще? Или можно просто сделать запрос на обновление постов
export const setCreatedPost = (title: string, body: string): SetCreatedPostType => ({
  type: SET_CREATED_POST, title, body
})
export const updatePost = (postId: number, title: string, body: string): UpdatePostType => ({
  type: UPDATE_POST, postId, title, body
})
export const setUpdatedPost = (postId: number, title: string, body: string): SetUpdatedPostType => ({
  type: SET_UPDATED_POST, postId, title, body
})
export const createComment = (postId: number, body: string): CreateCommentType => ({
  type: CREATE_COMMENT, postId, body
})
// Под вопросом: надо ли setCreatedComment вообще? Или можно просто сделать запрос на обновление комментов
export const setCreatedComment = (title: string, body: string): SetCreatedPostType => ({
  type: SET_CREATED_POST, title, body
})
