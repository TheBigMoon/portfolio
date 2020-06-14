import React from 'react';
import { CommentType } from '../../../types/types';
import Comment from './Comment/Comment';
import { StyledComments } from '../../../styledComponents/PostsPage/Comments/StyledComments';

type CommentsProps = {
  comments: Array<CommentType> | null,
  showComments: boolean
}

const Comments: React.FC<CommentsProps> = ({ comments, showComments }) => {
  const allComments = comments === null ? []
    : comments.map((comment) => (
      <Comment
        key={comment.id}
        id={comment.id}
        postId={comment.postId}
        body={comment.body}
      />
    ));

  return (
    <StyledComments>
      {showComments ? allComments : null}
    </StyledComments>
  );
};

export default Comments;