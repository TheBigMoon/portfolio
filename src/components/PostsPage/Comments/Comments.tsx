import React, {useState} from "react";
import {CommentType} from "../../../types/types";
import Comment from "./Comment/Comment";
import s from './Comments.module.css';

type CommentsProps = {
  comments: Array<CommentType> | null
}

const Comments: React.FC<CommentsProps> = ({comments}) => {
  const [showComments, toggleCommentsMode] = useState(false)

  const allComments = comments === null ? [] :
    comments.map(comment => <Comment
      key={comment.id}
      id={comment.id}
      postId={comment.postId}
      body={comment.body}
    />)

  const showCommentTitle = allComments.length > 0;

  return (
    <div className={s.comments}>
      {showCommentTitle && showComments ? <span onClick={() => toggleCommentsMode(false)}
          className={s.commentsTitle}>
          Hide Comments
        </span>
        : showCommentTitle && <span onClick={() => toggleCommentsMode(true)}
          className={s.commentsTitle}>
          Show Comments
        </span>
      }
      {showComments ? allComments : null}
    </div>
  )
}

export default Comments;