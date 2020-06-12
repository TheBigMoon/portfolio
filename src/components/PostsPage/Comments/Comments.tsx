import React from "react";
import {CommentType} from "../../../types/types";
import Comment from "./Comment/Comment";
import s from './Comments.module.css';

type CommentsProps = {
  comments: Array<CommentType> | null,
  showComments: boolean
}

const Comments: React.FC<CommentsProps> = ({comments, showComments}) => {

  const allComments = comments === null ? [] :
    comments.map(comment => <Comment
      key={comment.id}
      id={comment.id}
      postId={comment.postId}
      body={comment.body}
    />)

  return (
    <div className={s.comments}>
      {showComments ? allComments : null}
    </div>
  )
}

export default Comments;