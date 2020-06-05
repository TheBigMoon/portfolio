import React from "react";
import {CommentType} from "../../../types/types";

const Comment: React.FC<CommentType> = ({postId, id, body}) => {
  return (
    <div>
      {body}
    </div>
  )
}

export default Comment;