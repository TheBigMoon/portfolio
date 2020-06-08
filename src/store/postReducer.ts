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
  CreateCommentType,
  SetUpdatedPostType,
  ClearDeletedPostType,
  ToggleAddPostPopUp,
  ToggleAddCommentPopUp,
  ToggleUpdatePostPopUp
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
export const TOGGLE_ADD_POST_POP_UP = 'TOGGLE_ADD_POST_POP_UP';
export const TOGGLE_ADD_COMMENT_POP_UP = 'TOGGLE_ADD_COMMENT_POP_UP';
export const TOGGLE_UPDATE_POST_POP_UP = 'TOGGLE_UPDATE_POST_POP_UP';


const initialState: StateType = {
  posts: null,
  post: null,
  popUps: {
    showAddPost: false,
    showAddComment: false,
    showUpdatePost: false
  },
  postIdToUpdate: null
}

export const postReducer = (state = initialState, action: ActionType): StateType => {
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
    case CLEAR_DELETED_POST: {
      return {
        ...state,
        posts: state.posts && state.posts.filter(post => post.id !== action.postId)
      }
    }
    case SET_UPDATED_POST: {
      return {
        ...state,
        posts: state.posts && state.posts.map(post => {
          if (post.id === action.postId) {
            return {
              ...post,
              comments: post.comments,
              title: action.title,
              body: action.body
            }
          } else {
            return post;
          }
        })
      }
    }
    case TOGGLE_ADD_POST_POP_UP: {
      return {
        ...state,
        popUps: {
          ...state.popUps,
          showAddPost: !state.popUps.showAddPost
        }
      }
    }
    case TOGGLE_ADD_COMMENT_POP_UP: {
      return {
        ...state,
        popUps: {
          ...state.popUps,
          showAddComment: !state.popUps.showAddComment
        }
      }
    }
    case TOGGLE_UPDATE_POST_POP_UP: {
      return {
        ...state,
        popUps: {
          ...state.popUps,
          showUpdatePost: !state.popUps.showUpdatePost
        },
        postIdToUpdate: action.postId
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
export const updatePost = (postId: number, title: string, body: string): UpdatePostType => ({
  type: UPDATE_POST, postId, title, body
})
export const setUpdatedPost = (postId: number, title: string, body: string): SetUpdatedPostType => ({
  type: SET_UPDATED_POST, postId, title, body
})
export const createComment = (postId: number, body: string): CreateCommentType => ({
  type: CREATE_COMMENT, postId, body
})
// PopUp actions
export const toggleAddPostPopUp = (): ToggleAddPostPopUp => ({type: TOGGLE_ADD_POST_POP_UP});
export const toggleAddCommentPopUp = (): ToggleAddCommentPopUp => ({type: TOGGLE_ADD_COMMENT_POP_UP});
export const toggleUpdatePostPopUp = (postId: number | null): ToggleUpdatePostPopUp => ({
  type: TOGGLE_UPDATE_POST_POP_UP, postId
});
