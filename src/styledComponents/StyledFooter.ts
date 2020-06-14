import styled from "styled-components";

export const StyledFooter = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #FAE9CB;
  background-color: #444B4D;
  font-size: 16px;
  font-weight: 600;
`;

export const FooterBlock = styled.div`
  margin-right: 50px;
`;

export const FooterLink = styled.a`
  color: #FAE9CB;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    cursor: pointer;
    color: #FF8587;
  }
`;

export const FooterImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 15px;
  
`;