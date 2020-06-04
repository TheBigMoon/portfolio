import React from "react";
import {PostType} from "../../types/types";
import Comments from "./Comments/Comments";

type PostProps = {
  post: PostType | null
}

const Post: React.FC<PostProps> = ({post}) => {
  if(post === null) {
    return null
  }
  return (
    <div>
      <div>{`${post.title} — ${post.id}`}</div>
      <div>{post.body}</div>
      {post.comments ? <Comments comments={post.comments}/> : null}
    </div>
  )
}

export default Post;