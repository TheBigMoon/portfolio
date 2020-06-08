import React, {useEffect} from "react";
import {PostType} from "../../types/types";
import {connect} from "react-redux";
import {App} from "../../store/store";
import {getPost, toggleUpdatePostPopUp, updatePost} from "../../store/postReducer";
import Post from "./Post";
import {useParams} from "react-router-dom";
import UpdatePostForm from "../common/reduxForms/UpdatePostForm/UpdatePostForm";

type MapStateProps = {
  post: PostType | null,
  postIdToUpdate: number | null,
  showUpdatePost: boolean
}
type MapDispatchProps = {
  getPost: (id: number) => void,
  toggleUpdatePostPopUp: (id: number | null) => void,
  updatePost: (postId: number, title: string, body: string) => void,
}
export type UpdatePostProps = {
  updatePostTitle: string,
  updatePostBody: string
}

const PostPageContainer: React.FC<MapStateProps & MapDispatchProps> = (
  {
    post,
    getPost,
    postIdToUpdate,
    updatePost,
    toggleUpdatePostPopUp,
    showUpdatePost
  }
) => {
  const {postId} = useParams()

  useEffect(() => {
    getPost(postId)
  }, [getPost, postId])

  const editPost = ({updatePostTitle, updatePostBody}: UpdatePostProps) => {
    let postId = postIdToUpdate === null ? 0 : postIdToUpdate
    updatePost(postId, updatePostTitle, updatePostBody)
  }
  return (
    <div>
      <Post
        toggleUpdatePostPopUp={toggleUpdatePostPopUp}
        showDeleteBtn={false}
        showLink={false}
        post={post}
      />
      {showUpdatePost ?
        <UpdatePostForm
          postIdToUpdate={postIdToUpdate}
          toggleUpdatePostPopUp={toggleUpdatePostPopUp}
          onSubmit={editPost}
        />
        : null
      }
    </div>
  )
}

const mapStateToProps = (state: App): MapStateProps => ({
  post: state.postPage.post,
  postIdToUpdate: state.postPage.postIdToUpdate,
  showUpdatePost: state.postPage.popUps.showUpdatePost
});

export default connect<MapStateProps, MapDispatchProps, {}, App>(
  mapStateToProps,
  {getPost, updatePost, toggleUpdatePostPopUp}
)(PostPageContainer);