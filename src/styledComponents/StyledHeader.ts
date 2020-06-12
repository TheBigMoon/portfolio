import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #FF8587;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const activeClassName = 'item-active'

export const NavItem = styled(NavLink).attrs({
  activeClassName
})`

  color: #FAE9CB;
  margin-right: 25px;
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
  color: #B84F4F;
  }

 &.${activeClassName} {
   color: #B84F4F;
 }
`;

