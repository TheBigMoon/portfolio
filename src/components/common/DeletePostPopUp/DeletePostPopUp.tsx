import React from "react";
import {Button} from "../../../styledComponents/common/buttons/Button";
import {PopUp} from "../../../styledComponents/common/popUps/PopUp";

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
    <PopUp>
      <div className={'popUpArea'}>
        <p>
          DELETE POST ?
        </p>
        <div className={'buttonsArea'}>
          <Button primary onClick={() => deletePost(postId)}>DELETE POST</Button>
          <Button onClick={() => toggleDeletePostPopUp(null)}>CANCEL</Button>
        </div>
      </div>
    </PopUp>
  )
}

export default DeletePostPopUp;