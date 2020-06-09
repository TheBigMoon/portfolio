import React, {useEffect} from "react";
import {PostType} from "../../types/types";
import {connect} from "react-redux";
import {App} from "../../store/store";
import {getPost} from "../../store/postReducer";
import Post from "./Post";
import {useParams} from "react-router-dom";

type MapStateProps = {
  post: PostType | null,
  postIdToUpdate: number | null,
  showUpdatePost: boolean
}
type MapDispatchProps = {
  getPost: (id: number) => void,
}

const PostPageContainer: React.FC<MapStateProps & MapDispatchProps> = (
  {
    post,
    getPost,
    showUpdatePost
  }
) => {
  const {postId} = useParams()

  useEffect(() => {
    getPost(postId)
  }, [getPost, postId])

  return (
    <div>
      <Post
        showUpdateBtn={false}
        showDeleteBtn={false}
        showLink={false}
        post={post}
      />
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
  {getPost,}
)(PostPageContainer);