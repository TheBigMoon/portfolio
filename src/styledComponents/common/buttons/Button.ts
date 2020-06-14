import styled from "styled-components";

type ButtonProps = {
  primary?: boolean
}

export const Button = styled.button`
  padding: 10px 20px;
  margin-right: ${(props: ButtonProps) => props.primary ? '25px' : '0'};
  border: none;
  border-radius: 5px;
  outline: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  color: #FAE9CB;
  background-color: ${(props: ButtonProps) => props.primary ? '#B84F4F' : '#444B4D'};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: background-color 0.3s, box-shadow 0.3s;
  
  &:hover {
  cursor: pointer;
  background-color: ${(props: ButtonProps) => props.primary ? '#FF8587' : '#727a7c'};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
`;