import styled from "styled-components";

export const AddPostDiv = styled.div`
  position: fixed;
  bottom: 80px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #B84F4F;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.15s;

  &:hover {
  cursor: pointer;
  background-color: #FF8587;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const AddPostBtn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.15s;

  &:hover {
  border-radius: 50%;
  transform: rotate(90deg);
  }
`;