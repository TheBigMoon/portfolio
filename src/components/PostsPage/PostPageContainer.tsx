import React, {useEffect} from "react";
import {PostType} from "../../types/types";
import {connect} from "react-redux";
import {App} from "../../store/store";
import {getPost, sendComment, toggleAddCommentPopUp} from "../../store/postReducer";
import Post from "./Post";
import {useParams} from "react-router-dom";
import CommentPostForm from "../common/reduxForms/CommentPostForm/CommentPostForm";

type MapStateProps = {
  post: PostType | null,
  postIdToComment: number | null,
  showAddComment: boolean
}
type MapDispatchProps = {
  getPost: (id: number) => void,
  sendComment: (postId: number, body: string) => void,
  toggleAddCommentPopUp: (posId: number | null) => void,
}
export type CommentPostProps = {
  commentPostBody: string
}

const PostPageContainer: React.FC<MapStateProps & MapDispatchProps> = (
  {
    post,
    getPost,
    sendComment,
    postIdToComment,
    toggleAddCommentPopUp,
    showAddComment
  }
) => {
  const {postId} = useParams()

  useEffect(() => {
    getPost(postId)
  }, [getPost, postId])

  const addComment = ({commentPostBody}: CommentPostProps) => {
    debugger
    let postId = postIdToComment === null ? 0 : postIdToComment
    sendComment(postId, commentPostBody);
  }

  return (
    <div>
      <Post
        toggleAddCommentPopUp={toggleAddCommentPopUp}
        showCommentBtn={true}
        showUpdateBtn={false}
        showDeleteBtn={false}
        showLink={false}
        post={post}
      />
      {showAddComment ? <CommentPostForm
        onSubmit={addComment}
        toggleAddCommentPopUp={toggleAddCommentPopUp}
      />
      : null
      }
    </div>
  )
}

const mapStateToProps = (state: App): MapStateProps => ({
  post: state.postPage.post,
  postIdToComment: state.postPage.postIdToComment,
  showAddComment: state.postPage.popUps.showAddComment
});

export default connect<MapStateProps, MapDispatchProps, {}, App>(
  mapStateToProps,
  {getPost, toggleAddCommentPopUp, sendComment}
)(PostPageContainer);