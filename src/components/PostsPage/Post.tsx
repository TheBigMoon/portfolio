import React from "react";
import {PostType} from "../../types/types";
import Comments from "./Comments/Comments";
import s from './Post.module.css';
import {NavLink} from "react-router-dom";
import deleteBtn from '../../multimedia/deletePostButton.png';
import editPostBtn from '../../multimedia/editPostButton.png'

type PostProps = {
  post: PostType | null,
  showLink: boolean,
  showDeleteBtn: boolean,
  showUpdateBtn: boolean,
  toggleDeletePostPopUp?: (postId: number | null) => void,
  toggleUpdatePostPopUp?: (postId: number | null) => void
}

const Post: React.FC<PostProps> = (
  {
    post,
    showLink,
    showDeleteBtn,
    showUpdateBtn,
    toggleUpdatePostPopUp,
    toggleDeletePostPopUp
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
      </div>
      <div className={s.postBody}>
        {post.body}
      </div>
      {post.comments ? <Comments comments={post.comments}/> : null}
    </div>
  )
}

export default Post;