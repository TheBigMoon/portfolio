import React from "react";
import {CommentType} from "../../../types/types";

type CommentsProps = {
  comments: Array<CommentType> | null
}

const Comments: React.FC<CommentsProps> = ({comments}) => {
  return (
    <div>

    </div>
  )
}

export default Comments;