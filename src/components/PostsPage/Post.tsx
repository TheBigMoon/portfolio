import React from "react";
import {PostType} from "../../types/types";


const Post: React.FC<PostType> = ({id, body, title, comments}) => {
  return (
    <div>
      <div>{`${title} — ${id}`}</div>
      <div>{body}</div>
    </div>
  )
}

export default Post;