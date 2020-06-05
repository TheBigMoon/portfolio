import React from "react";
import {CommentType} from "../../../types/types";
import Comment from "./Comment";
import s from './Comments.module.css';

type CommentsProps = {
  comments: Array<CommentType> | null
}

const Comments: React.FC<CommentsProps> = ({comments}) => {
  const allComments = comments === null ? [] :
    comments.map(comment => <Comment
      key={comment.id}
      id={comment.id}
      postId={comment.postId}
      body={comment.body}
    />)

  return (
    <div className={s.comments}>
      {allComments.length ? <p className={s.commentsTitle}>Comments</p> : null}
      {allComments}
    </div>
  )
}

export default Comments;