import React from "react";
import addPostBtn from '../../../multimedia/addPostButton.png';
import s from './AddPostButton.module.css';

type AddPostBtnProps = {
  toggleAddPostPopUp: () => void
}

const AddPostButton: React.FC<AddPostBtnProps> = ({toggleAddPostPopUp}) => {
  return (
    <div onClick={toggleAddPostPopUp} className={s.addPost}>
      <div className={s.btn}>
        <img src={addPostBtn} alt=""/>
      </div>
    </div>
  )
}

export default AddPostButton;