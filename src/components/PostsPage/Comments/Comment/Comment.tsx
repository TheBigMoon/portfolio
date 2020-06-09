import React from "react";
import {CommentType} from "../../../../types/types";
import s from './Comment.module.css'

const Comment: React.FC<CommentType> = ({postId, id, body}) => {
  return (
    <div className={s.comment}>
      — {body}
    </div>
  )
}

export default Comment;