import React, {useState} from "react";
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
    <div className={s.post}>
      <div className={s.postTitle}>
        {showLink ? <div><NavLink to={`posts/${post.id}`}>{post.title}</NavLink></div>
          : <div>{post.title}</div>
        }
        {showUpdateBtn ? <img
          onClick={() => toggleUpdatePostPopUp && toggleUpdatePostPopUp(post.id)}
          src={editPostBtn}
          alt='editPostBtn'
        /> : null
        }
        {showDeleteBtn ? <img
          onClick={() => toggleDeletePostPopUp && toggleDeletePostPopUp(post.id)}
          src={deleteBtn}
          alt="deleteBtn"/> : null
        }
      </div>
      <div className={s.postBody}>
        {post.body}
      </div>
      {showCommentBtn ?
        <button onClick={() => toggleAddCommentPopUp && toggleAddCommentPopUp(post.id)}>
          Add Comment
        </button>
        : null
      }
      {showCommentBtn && showComments ?
        <span onClick={() => toggleCommentsMode(false)}
              className={s.commentsTitle}>
          Hide Comments
        </span>
        : showCommentBtn && <span onClick={() => toggleCommentsMode(true)}
                className={s.commentsTitle}>
          Show Comments
        </span>
      }
      {post.comments ? <Comments showComments={showComments} comments={post.comments}/> : null}
    </div>
  )
}

export default Post;