import styled, {keyframes} from "styled-components";

const animation = keyframes`
  0% {
    transform: translate(-50%, 0);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopUpArea = styled.div`
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #FAE9CB;
  animation: ${animation} 0.15s;
`;

export const PopUpTitle = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #B84F4F;
`;

export const ButtonsArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;