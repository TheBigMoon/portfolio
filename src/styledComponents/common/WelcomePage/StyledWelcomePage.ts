import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const animate = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(-1000px);
    opacity: 0.3;
  }

`;

export const BackgroundArea = styled.div`
  background: #FAE9CB;
  width: 100%;
  height: 100vh;
`;

export const CirclesArea = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

type StyledLiProps = {
  left: number,
  size: number,
  aDelay: number,
  aDuration?: number
}

export const Circle = styled.li<StyledLiProps>`
  position: absolute;
  display: block;
  list-style: none;
  background-color: #FF8587;
  animation: ${animate} 25s linear infinite;
  bottom: -150px;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  left: ${(props) => props.left}%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  animation-delay: ${(props) => props.aDelay}s;
  animation-duration: ${(props) => props.aDuration}s;
`;

export const WelcomeArea = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  top: 50%;
  transform: translate(0, -50%);
  background-color: white;
  width: 40%;
  border-radius: 15px;
  padding: 25px 35px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const WelcomeTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #FF8587;
`;

export const Body = styled.p``;

export const Enter = styled(NavLink)`
  margin-top: 25px;
  margin-bottom: 15px;
  padding: 10px 25px 11px 25px;
  border: none;
  border-radius: 5px;
  outline: none;
  text-decoration: none;
  color: #FAE9CB;
  background-color: #B84F4F;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.2s;
  font-size: 16px;
  font-weight: 600;
  vertical-align: top;
  
  &:hover {
    cursor: pointer;
    background-color: #FF8587;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  
  &:active {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;