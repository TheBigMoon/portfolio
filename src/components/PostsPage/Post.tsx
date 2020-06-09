import React from "react";
import {PostType} from "../../types/types";
import Comments from "./Comments/Comments";
import s from './Post.module.css';
import {NavLink} from "react-router-dom";
import deleteBtn from '../../multimedia/deletePostButton.png';
import editPostBtn from '../../multimedia/editPostButton.png'
import commentPostBtn from '../../multimedia/commentPostButton.png';

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
  if (post === null) {
    return null
  }
  return (
    <div className={s.post}>
      <div className={s.postTitle}>
        {showLink ? <div><NavLink to={`post/${post.id}`}>{post.title}</NavLink></div>
          : <div>{post.title}</div>
        }
        {showDeleteBtn ? <img
          onClick={() => toggleDeletePostPopUp && toggleDeletePostPopUp(post.id)}
          src={deleteBtn}
          alt="deleteBtn"/> : null
        }
        {showUpdateBtn ? <img
          onClick={() => toggleUpdatePostPopUp && toggleUpdatePostPopUp(post.id)}
          src={editPostBtn}
          alt='editPostBtn'
        /> : null
        }
        {showCommentBtn ? <img
          onClick={()=> toggleAddCommentPopUp && toggleAddCommentPopUp(post.id)}
          src={commentPostBtn}
          alt="commentPostBtn"
        /> : null
        }
      </div>
      <div className={s.postBody}>
        {post.body}
      </div>
      {post.comments ? <Comments comments={post.comments}/> : null}
    </div>
  )
}

export default Post;