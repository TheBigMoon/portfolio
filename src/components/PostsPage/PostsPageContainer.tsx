import React from "react";
import {PostType} from "../../types/types";
import {connect, DefaultRootState} from "react-redux";
import {App} from "../../store/store";
import {getPosts} from "../../store/postReducer";

type MapStateProps = {
  posts: Array<PostType> | null
}
type MapDispatchProps = {
  getPosts: () => void
}
type PostsPageProps = MapStateProps & MapDispatchProps

const PostsPageContainer: React.FC<PostsPageProps> = ({posts, getPosts}) => {
  return (
    <div>

    </div>
  )
}

const mapStateToProps = (state: App): MapStateProps => ({
  posts: state.postPage.posts
});

export default connect<MapStateProps, MapDispatchProps, {}, App>(
  mapStateToProps,
  {getPosts}
)(PostsPageContainer);