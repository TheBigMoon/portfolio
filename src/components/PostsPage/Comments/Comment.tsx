import React from "react";
import {CommentType} from "../../../types/types";

const Comment: React.FC<CommentType> = ({postId, id, body}) => {
  return (
    <div>
    <div>{id}</div>
    <div>{body}</div>
    </div>
  )
}

export default Comment;