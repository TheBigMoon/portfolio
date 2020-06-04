import React from "react";
import {CommentType} from "../../../types/types";
import Comment from "./Comment";

type CommentsProps = {
  comments: Array<CommentType> | null
}

const Comments: React.FC<CommentsProps> = ({comments}) => {
  const allComments = comments === null ?
    null :
    comments.map(comment => <Comment
      key={comment.id}
      id={comment.id}
      postId={comment.postId}
      body={comment.body}
    />)

  return (
    <div>
      {allComments}
    </div>
  )
}

export default Comments;