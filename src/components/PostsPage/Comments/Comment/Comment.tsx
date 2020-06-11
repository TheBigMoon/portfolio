import React from "react";
import {CommentType} from "../../../../types/types";
import s from './Comment.module.css'
import user from '../../../../multimedia/user.png';

const Comment: React.FC<CommentType> = ({body}) => {
  return (
    <div className={s.comment}>
      <div className={s.user}>
        <img src={user} alt=""/>
      </div>
      <div className={s.body}>
        <p>Name Surname</p>
        {body}
      </div>
    </div>
  )
}

export default Comment;