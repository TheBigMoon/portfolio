import React, {useState} from "react";
import {PostType} from "../../types/types";
import Comments from "./Comments/Comments";
import deleteBtn from '../../multimedia/deletePostButton.png';
import editPostBtn from '../../multimedia/editPostButton.png'
import {
  IconButton,
  PostBody,
  PostLink,
  StyledPost,
  Title,
  TitleBlock,
  CommentBtn
} from "../../styledComponents/PostsPage/StyledPost";
import {Button} from "../../styledComponents/common/buttons/Button";

type PostProps = {
  post: PostType | null,
  showLink: boolean,
  showDeleteBtn: boolean,
  showUpdateBtn: boolean,
  showCommentBtn: boolean,
  toggleDeletePostPopUp?: (postId: number | null) => void,
  toggleUpdatePostPopUp?: (postId: number | null) => void,
  toggleAddCommentPopUp?: (postId: number | null) => void
}

const Post: React.FC<PostProps> = (
  {
    post,
    showLink,
    showDeleteBtn,
    showUpdateBtn,
    showCommentBtn,
    toggleUpdatePostPopUp,
    toggleDeletePostPopUp,
    toggleAddCommentPopUp
  }
) => {
  let [showComments, toggleCommentsMode] = useState(false)

  if (post === null) {
    return null
  } else return (
    <StyledPost>
      <TitleBlock>
        {showLink ?
          <Title>
            <PostLink to={`posts/${post.id}`}>
              {post.title}
            </PostLink>
          </Title>
          : <Title>{post.title}</Title>
        }
        {showUpdateBtn ? <IconButton
          onClick={() => toggleUpdatePostPopUp && toggleUpdatePostPopUp(post.id)}
          src={editPostBtn}
          alt='editPostBtn'
        /> : null
        }
        {showDeleteBtn ? <IconButton
          onClick={() => toggleDeletePostPopUp && toggleDeletePostPopUp(post.id)}
          src={deleteBtn}
          alt="deleteBtn"/> : null
        }
      </TitleBlock>
      <PostBody>
        {post.body}
      </PostBody>
      {showCommentBtn ?
        <Button primary small onClick={() => toggleAddCommentPopUp && toggleAddCommentPopUp(post.id)}>
          Add Comment
        </Button>
        : null
      }
      {showCommentBtn && showComments ?
        <CommentBtn onClick={() => toggleCommentsMode(false)}>
          Hide Comments
        </CommentBtn>
        : showCommentBtn && <CommentBtn onClick={() => toggleCommentsMode(true)}>
          Show Comments
        </CommentBtn>
      }
      {post.comments ? <Comments showComments={showComments} comments={post.comments}/> : null}
    </StyledPost>
  )
}

export default Post;