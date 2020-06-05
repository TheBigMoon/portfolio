import React, {useEffect} from "react";
import {PostType} from "../../types/types";
import {connect} from "react-redux";
import {App} from "../../store/store";
import {getPosts} from "../../store/postReducer";
import Post from "./Post";
import AddPostButton from "../common/AddPostButton/AddPostButton";

type MapStateProps = {
  posts: Array<PostType> | null
}
type MapDispatchProps = {
  getPosts: () => void
}
type PostsPageProps = MapStateProps & MapDispatchProps

const PostsPageContainer: React.FC<PostsPageProps> = ({posts, getPosts}) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  const allPosts = posts === null ?
    null :
    posts.map(post => <Post showLink={true} post={post}/>)

  return (
    <div>
      {allPosts}
      <AddPostButton/>
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