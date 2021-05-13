import * as React from 'react';
import styled from "styled-components";

const StyledRangeWrapper = styled.div`
  margin-top: 15px;
  position: relative;
  width: 100%;
  height: 23px;
  border-radius: 25px;
  background: none;
  z-index: 1;
`

const RangeWrapper: React.FC = ({children}) => {
    return (
        <StyledRangeWrapper>
            {children}
        </StyledRangeWrapper>
    );
};

export default RangeWrapper;