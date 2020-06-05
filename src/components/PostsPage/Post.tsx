import React from "react";
import {PostType} from "../../types/types";
import Comments from "./Comments/Comments";
import s from './Post.module.css';
import {NavLink} from "react-router-dom";

type PostProps = {
  post: PostType | null
}

type MyProps = {
  showLink: boolean
}

const Post: React.FC<PostProps & MyProps> = ({post, showLink}) => {
  if (post === null) {
    return null
  }
  return (
    <div className={s.post}>
      <div className={s.postTitle}>
        {showLink ? <NavLink to={`post/${post.id}`}>{post.title}</NavLink> : post.title}
      </div>
      <div className={s.postBody}>
        {post.body}
      </div>
      {post.comments ? <Comments comments={post.comments}/> : null}
    </div>
  )
}

export default Post;