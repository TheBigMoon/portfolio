import {takeLatest, put, call} from 'redux-saga/effects'
import {
  CLEAR_DELETED_POST, CREATE_COMMENT, CREATE_POST, DELETE_POST,
  GET_POST, GET_POSTS, SET_POST, SET_POSTS,
  SET_UPDATED_POST, TOGGLE_ADD_POST_POP_UP, UPDATE_POST
} from "../store/postReducer";
import {API} from "../api/api";
import {CreateCommentType, CreatePostType, DeletePostType, GetPostType, UpdatePostType} from "../types/types";

function* getPostsWorker() {
  const posts = yield call(API.getPosts);
  yield put({type: SET_POSTS, posts})
}

function* getPostWorker(action: GetPostType) {
  const post = yield call(API.getPost, action.id);
  yield put({type: SET_POST, post})
}

function* deletePostWorker(action: DeletePostType) {
  const postId = action.postId;
  yield call(API.deletePost, postId);
  yield put({type: CLEAR_DELETED_POST, postId})
}

function* createPostWorker(action: CreatePostType) {
  const {title, body} = action;
  yield call(API.createPost, title, body);
  yield put({type: TOGGLE_ADD_POST_POP_UP})
  yield put({type: GET_POSTS})
}

function* updatePostWorker(action: UpdatePostType) {
  const {postId, title, body} = action;
  yield call(API.updatePost, postId, title, body);
  yield put({type: SET_UPDATED_POST, postId, title, body})
}

// Доделать логику вставки коммента или закрытия всплывашки с обновлением поста и комментов
function* createCommentWorker(action: CreateCommentType) {
  const {postId, body} = action;
  yield call(API.createComment, postId, body);
}

export function* sagaWatcher() {
  yield takeLatest(GET_POSTS, getPostsWorker);
  yield takeLatest(GET_POST, getPostWorker);
  yield takeLatest(DELETE_POST, deletePostWorker);
  yield takeLatest(CREATE_POST, createPostWorker);
  yield takeLatest(UPDATE_POST, updatePostWorker);
  yield takeLatest(CREATE_COMMENT, createCommentWorker);
}

