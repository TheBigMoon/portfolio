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

export const PopUp = styled.div`
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
  
  & .popUpArea {
    min-width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: #FAE9CB;
    animation: ${animation} 0.15s;
  }
  
  & p {
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 30px;
    color: #B84F4F;
  }
  
  & textArea {
    font-size: 16px;
    width: 80%;
    padding: 15px;
    resize: none;
    border: none;
    border-radius: 5px;
    outline: none;
    overflow: hidden;
    margin-bottom: 25px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    
    &::placeholder {
    font-size: 16px;
    color: #FF8587;
  }
  
  & .buttonsArea {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;