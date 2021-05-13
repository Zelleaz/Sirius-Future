import * as React from 'react';
import styled from "styled-components";

const StyledWord = styled.span<{margin: number, type: string}>`
  font-size: 60px;
  font-weight: 700;
  text-transform: lowercase;
  color: ${({theme}) => theme.colors.purple};
  margin-${props => props.type}: ${props => props.margin}px;
`

const Word: React.FC<{text: string, margin: number, type: 'left' | 'right'}> = ({text, margin, type}) => {
    return (
        <StyledWord type={type} margin={margin}>
            {text}
        </StyledWord>
    );
};

export default Word;