import React from 'react';
import { CommentType } from '../../../../types/types';
import user from '../../../../multimedia/user.png';
import {
  CommentBody,
  StyledComment,
  User,
  UserName
} from '../../../../styledComponents/PostsPage/Comments/Comment/StyledComment';

const Comment: React.FC<CommentType> = ({ body }) => (
  <StyledComment>
    <User>
      <img src={user} alt='' />
    </User>
    <CommentBody>
      <UserName>
        Name Surname
      </UserName>
      {body}
    </CommentBody>
  </StyledComment>
);

export default Comment;