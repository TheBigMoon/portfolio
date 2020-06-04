import React, {useEffect} from "react";
import {PostType} from "../../types/types";
import {connect} from "react-redux";
import {App} from "../../store/store";
import {getPost} from "../../store/postReducer";
import Post from "./Post";
import {useParams} from "react-router-dom";

type MapStateProps = {
  post: PostType | null
}
type MapDispatchProps = {
  getPost: (id: number) => void
}

type PostPageProps = MapStateProps & MapDispatchProps

const PostPageContainer: React.FC<PostPageProps> = ({post, getPost}) => {
  const {postId} = useParams()

  useEffect(() => {
    getPost(postId)
  }, [getPost, postId])

  return (
    <div>
      <Post post={post}/>
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