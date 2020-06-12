import React from "react";
import {Button} from "../../../styledComponents/common/buttons/Button";
import {Background, ButtonsArea, PopUpArea, PopUpTitle} from "../../../styledComponents/common/popUps/DeletePopUp";

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
    <Background>
      <PopUpArea>
        <PopUpTitle>
          DELETE POST ?
        </PopUpTitle>
        <ButtonsArea>
          <Button primary onClick={() => deletePost(postId)}>DELETE POST</Button>
          <Button onClick={() => toggleDeletePostPopUp(null)}>CANCEL</Button>
        </ButtonsArea>
      </PopUpArea>
    </Background>
  )
}

export default DeletePostPopUp;