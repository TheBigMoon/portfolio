import React, {useEffect} from "react";
import {PostType} from "../../types/types";
import {connect} from "react-redux";
import {App} from "../../store/store";
import {
  createPost,
  deletePost,
  getPosts,
  toggleAddPostPopUp,
  toggleUpdatePostPopUp,
  updatePost
} from "../../store/postReducer";
import Post from "./Post";
import AddPostButton from "../common/AddPostButton/AddPostButton";
import AddPostForm from "../common/reduxForms/AddPostForm/AddPostForm";
import UpdatePostForm from "../common/reduxForms/UpdatePostForm/UpdatePostForm";

type MapStateProps = {
  posts: Array<PostType> | null,
  showAddPost: boolean,
  showEditPost: boolean,
  postIdToUpdate: number | null
}
type MapDispatchProps = {
  getPosts: () => void,
  toggleAddPostPopUp: () => void,
  toggleUpdatePostPopUp: (id: number | null) => void,
  createPost: (title: string, body: string) => void,
  deletePost: (id: number) => void,
  updatePost: (postId: number, title: string, body: string) => void
}
export type AddPostProps = {
  addPostTitle: string,
  addPostBody: string
}

export type UpdatePostProps = {
  updatePostTitle: string,
  updatePostBody: string
}

const PostsPageContainer: React.FC<MapStateProps & MapDispatchProps> = (
  {
    posts,
    getPosts,
    toggleAddPostPopUp,
    showAddPost,
    showEditPost,
    createPost,
    deletePost,
    postIdToUpdate,
    toggleUpdatePostPopUp,
    updatePost
  }
) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  const allPosts = posts === null ?
    null : posts.map(post => <Post
      toggleUpdatePostPopUp={toggleUpdatePostPopUp}
      showDeleteBtn={true}
      deletePost={deletePost}
      showLink={true}
      post={post}/>
    ).reverse()

  const addPost = ({addPostTitle, addPostBody}: AddPostProps) => {
    createPost(addPostTitle, addPostBody)
  }

  const editPost = ({updatePostTitle, updatePostBody}: UpdatePostProps, ) => {
    let postId = postIdToUpdate === null ? 0 : postIdToUpdate
    updatePost(postId, updatePostTitle, updatePostBody)
  }
  debugger
  return (
    <div>
      {allPosts}
      {showAddPost ? <AddPostForm onSubmit={addPost} toggleAddPostPopUp={toggleAddPostPopUp}/> : null}
      {showEditPost ?
        <UpdatePostForm
          postIdToUpdate={postIdToUpdate}
          toggleUpdatePostPopUp={toggleUpdatePostPopUp}
          onSubmit={editPost}
        />
        : null
      }

      {!showAddPost ? <AddPostButton toggleAddPostPopUp={toggleAddPostPopUp}/> : null}
    </div>
  )
}

const mapStateToProps = (state: App): MapStateProps => ({
  posts: state.postPage.posts,
  showAddPost: state.postPage.popUps.showAddPost,
  showEditPost: state.postPage.popUps.showUpdatePost,
  postIdToUpdate: state.postPage.postIdToUpdate
});

export default connect<MapStateProps, MapDispatchProps, {}, App>(
  mapStateToProps,
  {getPosts, toggleAddPostPopUp, createPost, deletePost, toggleUpdatePostPopUp, updatePost}
)(PostsPageContainer);