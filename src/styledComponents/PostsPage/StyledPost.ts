import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const StyledPost = styled.div`
  padding: 10px 20px 15px 20px;
  margin-bottom: 25px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: #B84F4F;
`;

export const Title = styled.div`
    width: 100%;
`;

export const IconButton = styled.img`
    border-radius: 50%;
    padding: 3px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    margin-right: 10px;
    background-color: #FAE9CB;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  
  &:active {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const PostLink = styled(NavLink).attrs({})`
  color: #B84F4F;
  margin-right: 25px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
  color: #FF8587;
  }
`;

export const PostBody = styled.div`
  margin-bottom: 5px;
`;

export const CommentBtn = styled.span`
  cursor: pointer;
  font-weight: 500;
  color: #FF8587;
`;