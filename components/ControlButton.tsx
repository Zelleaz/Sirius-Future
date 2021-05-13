import * as React from 'react';
import styled from "styled-components";
import Image from "next/image";
import {IControlButtonProps} from "../types/UI";

const StyledControlButton = styled.button<{margin?: string}>`
  width: 90px;
  height: 90px;
  margin: ${props => props.margin || ''};
  background-color: ${({theme}) => theme.colors.yellow};
  border: 1px solid ${({theme}) => theme.colors.yellow};
  border-radius: 15px;
`

const ControlButton: React.FC<IControlButtonProps> = (props) => {
    const type: string = props.isDecr ? 'Decrement' : 'Increment'

    return (
        <StyledControlButton {...props}>
            <Image src={`/${type}.svg`} alt={type} width={45} height={45} />
        </StyledControlButton>
    );
};

export default ControlButton;