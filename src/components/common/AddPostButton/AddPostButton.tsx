import React from "react";
import addPostBtn from '../../../multimedia/addPostButton.png';
import s from './AddPostButton.module.css';

const AddPostButton = () => {
  return (
    <div className={s.addPost}>
      <img src={addPostBtn} alt=""/>
    </div>
  )
}

export default AddPostButton;