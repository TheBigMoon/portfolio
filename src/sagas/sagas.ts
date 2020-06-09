import {takeLatest, put, call} from 'redux-saga/effects'
import {
  clearDeletedPost, CREATE_COMMENT, CREATE_POST, DELETE_POST,
  GET_POST, GET_POSTS, getPost, setPost, setPosts, setUpdatedPost,
  TOGGLE_ADD_POST_POP_UP, toggleAddCommentPopUp, toggleDeletePostPopUp, toggleUpdatePostPopUp, UPDATE_POST
} from "../store/postReducer";
import {API} from "../api/api";
import {SendCommentType, CreatePostType, DeletePostType, GetPostType, UpdatePostType} from "../types/types";

function* getPostsWorker() {
  const posts = yield call(API.getPosts);
  yield put(setPosts(posts))
}

function* getPostWorker(action: GetPostType) {
  const post = yield call(API.getPost, action.id);
  yield put(setPost(post))
}

function* deletePostWorker(action: DeletePostType) {
  const postId = action.postId;
  yield call(API.deletePost, postId);
  yield put(clearDeletedPost(postId))
  yield put(toggleDeletePostPopUp(null))
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
  yield put(setUpdatedPost(postId, title, body))
  yield put(toggleUpdatePostPopUp(null))
}

// Доделать логику вставки коммента или закрытия всплывашки с обновлением поста и комментов
function* createCommentWorker(action: SendCommentType) {
  const {postId, body} = action;
  yield call(API.createComment, postId, body);
  yield put(toggleAddCommentPopUp(null));
  yield put(getPost(postId))
}

export function* sagaWatcher() {
  yield takeLatest(GET_POSTS, getPostsWorker);
  yield takeLatest(GET_POST, getPostWorker);
  yield takeLatest(DELETE_POST, deletePostWorker);
  yield takeLatest(CREATE_POST, createPostWorker);
  yield takeLatest(UPDATE_POST, updatePostWorker);
  yield takeLatest(CREATE_COMMENT, createCommentWorker);
}

