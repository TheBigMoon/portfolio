import {ActionType, GetPostType, GetPostsType, SetPostType, SetPostsType, PostType, StateType} from "../types/types";

export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS = 'SET_POSTS';
export const GET_POST = 'GET_POST';
export const SET_POST = 'SET_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const SET_UPDATED_POST = 'SET_UPDATED_POST';
export const DELETE_POST = 'DELETE_POST';
export const CLEAR_DELETED_POST = 'CLEAR_DELETED_POST';

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
export const getPost = (): GetPostType => ({type: GET_POST})
export const setPost = (post: PostType): SetPostType => ({type: SET_POST, post})
