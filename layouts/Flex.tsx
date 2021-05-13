import * as React from 'react';
import {IFlexProps} from "../types/UI";
import styled from "styled-components";

const FlexWrapper = styled.div<IFlexProps>`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-direction: ${props => props.direction};
  flex-wrap: wrap;
  min-height: ${props => props.minHeight || ''};
  width: ${props => props.width || ''};
  margin: ${props => props.margin || ''};
`

const Flex: React.FC<IFlexProps> = (props) => {
    return <FlexWrapper {...props} />
};

export default Flex;