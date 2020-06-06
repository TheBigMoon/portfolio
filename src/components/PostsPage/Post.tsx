import React from "react";
import {PostType} from "../../types/types";
import Comments from "./Comments/Comments";
import s from './Post.module.css';
import {NavLink} from "react-router-dom";
import deleteBtn from '../../multimedia/deletePostButton.png';

type PostProps = {
  post: PostType | null,
  deletePost?: (id: number) => void,
  showLink: boolean,
  showDeleteBtn: boolean
}

const Post: React.FC<PostProps> = ({post, showLink, deletePost, showDeleteBtn}) => {
  if (post === null) {
    return null
  }
  return (
    <div className={s.post}>
      <div className={s.postTitle}>
        {showLink ?
          <div>
            <NavLink to={`post/${post.id}`}>
              {post.title}
            </NavLink>
          </div>
          : post.title}
        {showDeleteBtn ? <img onClick={() => deletePost ? deletePost(post.id) : null} src={deleteBtn} alt=""/> : null}
      </div>
      <div className={s.postBody}>
        {post.body}
      </div>
      {post.comments ? <Comments comments={post.comments}/> : null}
    </div>
  )
}

export default Post;