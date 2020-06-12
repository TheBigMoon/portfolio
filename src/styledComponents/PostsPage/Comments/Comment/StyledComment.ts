import styled from "styled-components";

export const StyledComment = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.2s;

.body {
  display: flex;
  flex-direction: column;
}

.body p {
  color: #B84F4F;
  font-weight: 600;
}

`;

export const User = styled.div`
  margin-right: 5px;

  & img {
  width: 50px;
  height: 50px;
  }
`;

export const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.div`
  color: #B84F4F;
  font-weight: 600;
`;