import React from 'react';
import addPostBtn from '../../../multimedia/addPostButton.png';
import { AddPostBtn, AddPostDiv } from '../../../styledComponents/common/buttons/AddPostBtn/AddPostBtn';

type AddPostBtnProps = {
  toggleAddPostPopUp: () => void
}

const AddPostButton: React.FC<AddPostBtnProps> = ({ toggleAddPostPopUp }) => (
  <AddPostDiv onClick={toggleAddPostPopUp}>
    <AddPostBtn>
      <img src={addPostBtn} alt='Add Post Button' />
    </AddPostBtn>
  </AddPostDiv>
);

export default AddPostButton;