import React from "react";
import s from './DeletePostPopUp.module.css';

type DeletePostPopUpProps = {
}

const DeletePostPopUp: React.FC<DeletePostPopUpProps> = () => {
  return (
    <div className={s.background}>
      <div className={s.deletePost}>
        <p>DELETE POST ?</p>
        <div className={s.buttons}>
          <button>DELETE POST</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default DeletePostPopUp;