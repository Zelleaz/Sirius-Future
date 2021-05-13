import * as React from 'react';
import styled from "styled-components";
import {IControlButtonProps} from "../types/UI";

const StyledButton = styled.button`
  padding: 25px 118px;
  border-radius: 45px;
  background-color: ${({theme}) => theme.colors.yellow};
  border: 1px solid ${({theme}) => theme.colors.yellow};
  color: ${({theme}) => theme.colors.purple};
  transition: all ease 0.5s;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 38px;
  drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    background-color: ${({theme}) => theme.colors.purple};
    border-color: ${({theme}) => theme.colors.purple};
    color: ${({theme}) => theme.colors.yellow};
  }
`

const Button: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
    return <StyledButton {...props} />
};

export default Button;