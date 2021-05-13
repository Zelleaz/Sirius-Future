import * as React from 'react';
import styled from "styled-components";

const StyledFlexBasisElem = styled.div<{flexBasis: number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: ${props => props.flexBasis}%;
`

const FlexBasisElem: React.FC<{flexBasis: number}> = ({children, flexBasis}) => {
    return (
        <StyledFlexBasisElem flexBasis={flexBasis}>
            {children}
        </StyledFlexBasisElem>
    );
};

export default FlexBasisElem;