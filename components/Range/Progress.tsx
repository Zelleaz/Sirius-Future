import * as React from 'react';
import styled from "styled-components";
import {IProgressProps} from "../../types/UI";
import {useMemo} from "react";
import {getProgressWidth} from "../../helpers/getProgressWidth";

const StyledProgress = styled.div<{width: number}>`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 3px;
  height: inherit;
  transition: all ease 10ms;
  width: calc(${(props) => props.width}%);
  background-color: ${({theme}) => theme.colors.yellow};
  border-radius: inherit;
`

const Progress: React.FC<IProgressProps> = ({value, max, step, min}) => {
    const width = useMemo(() => {
        return getProgressWidth(min, max, step, value)
    }, [value, max, step, min])

    return <StyledProgress width={width} />
};

export default Progress;