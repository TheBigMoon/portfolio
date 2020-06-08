import React from "react";
import s from './DeletePostPopUp.module.css';

type DeletePostPopUpProps = {
  toggleDeletePostPopUp: (id: number | null) => void,
  postIdToDelete: number | null,
  deletePost: (postId: number) => void
}

const DeletePostPopUp: React.FC<DeletePostPopUpProps> = (
  {toggleDeletePostPopUp, deletePost, postIdToDelete}
  ) => {

  let postId = postIdToDelete ? postIdToDelete : 0

  return (
    <div className={s.background}>
      <div className={s.deletePost}>
        <p>DELETE POST ?</p>
        <div className={s.buttons}>
          <button onClick={() => deletePost(postId)}>DELETE POST</button>
          <button onClick={() => toggleDeletePostPopUp(null)}>CANCEL</button>
        </div>
      </div>
    </div>
  )
}

export default DeletePostPopUp;