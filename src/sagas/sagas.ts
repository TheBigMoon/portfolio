import {takeLatest, put, call} from 'redux-saga/effects'
import {GET_POST, GET_POSTS, SET_POST, SET_POSTS} from "../store/postReducer";
import {API} from "../api/api";
import {GetPostType} from "../types/types";

export function* sagaWatcher() {
  yield takeLatest(GET_POSTS, getPostsWorker);
  yield takeLatest(GET_POST, getPostWorker)
}

function* getPostsWorker() {
  const posts = yield call(API.getPosts);
  yield put({type: SET_POSTS, posts})
}

function* getPostWorker(action: GetPostType) {
  const post = yield call(API.getPost, action.id);
  yield put({type: SET_POST, post})
}