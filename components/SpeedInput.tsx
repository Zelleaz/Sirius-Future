import * as React from 'react';
import styled from "styled-components";

const StyledSpeedInput = styled.input`
  margin: 0 16px;
  text-align: center;
  border-radius: 15px;
  padding: 2px 35px;
  border: 2px solid ${({theme}) => theme.colors.black};
  font-weight: 700;
  font-size: 48px;
  width: 55px;
  background: none;
  :disabled {
    color: ${({theme}) => theme.colors.black};
  }
`

const SpeedInput: React.FC<{value: number}> = (props) => {
    return <StyledSpeedInput disabled {...props} />
};

export default SpeedInput;