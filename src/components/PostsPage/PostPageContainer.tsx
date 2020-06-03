import React from "react";
import {PostType} from "../../types/types";
import {connect} from "react-redux";
import {App} from "../../store/store";
import {getPost} from "../../store/postReducer";

type MapStateProps = {
  post: PostType | null
}
type MapDispatchProps = {
  getPost: () => void
}
type PostsPageProps = MapStateProps & MapDispatchProps

const PostPageContainer: React.FC<PostsPageProps> = ({post, getPost}) => {
  return (
    <div>

    </div>
  )
}

const mapStateToProps = (state: App): MapStateProps => ({
  post: state.postPage.post
});

export default connect<MapStateProps, MapDispatchProps, {}, App>(
  mapStateToProps,
  {getPost}
)(PostPageContainer);