import React, {useEffect} from "react";
import {PostType} from "../../types/types";
import {connect} from "react-redux";
import {App} from "../../store/store";
import {createPost, getPosts, toggleAddPostPopUp} from "../../store/postReducer";
import Post from "./Post";
import AddPostButton from "../common/AddPostButton/AddPostButton";
import AddPostForm from "../common/reduxForms/AddPostForm/AddPostForm";

type MapStateProps = {
  posts: Array<PostType> | null,
  showAddPost: boolean
}
type MapDispatchProps = {
  getPosts: () => void,
  toggleAddPostPopUp: () => void,
  createPost: (title: string, body: string) => void
}
export type AddPostProps = {
  addPostTitle: string,
  addPostBody: string
}
type PostsPageProps = MapStateProps & MapDispatchProps

const PostsPageContainer: React.FC<PostsPageProps> = (
  {posts, getPosts, toggleAddPostPopUp, showAddPost, createPost}
  ) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  const allPosts = posts === null ?
    null :
    posts.map(post => <Post showLink={true} post={post}/>).reverse()

  const addPost = ({addPostTitle, addPostBody}: AddPostProps) => {
    createPost(addPostTitle, addPostBody)
  }

  return (
    <div>
      {allPosts}
      {showAddPost ? <AddPostForm onSubmit={addPost} toggleAddPostPopUp={toggleAddPostPopUp}/> : null}
      {!showAddPost ? <AddPostButton toggleAddPostPopUp={toggleAddPostPopUp}/> : null}
    </div>
  )
}

const mapStateToProps = (state: App): MapStateProps => ({
  posts: state.postPage.posts,
  showAddPost: state.postPage.popUps.showAddPost
});

export default connect<MapStateProps, MapDispatchProps, {}, App>(
  mapStateToProps,
  {getPosts, toggleAddPostPopUp, createPost}
)(PostsPageContainer);