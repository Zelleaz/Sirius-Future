import * as React from 'react';
import styled from "styled-components";
import {IRangeProps} from "../../types/UI";
import RangeWrapper from "./RangeWrapper";
import Progress from "./Progress";
import {useState} from "react";
import {useDispatch} from "react-redux";

const StyledRange = styled.input`
  height: inherit;
  background-color: inherit;
  border-radius: inherit;
  width: 100%;
  -webkit-appearance: none;
  z-index: 1;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 13px solid ${({theme}) => theme.colors.yellow};
    background-color: ${({theme}) => theme.colors.black};
    cursor: pointer;
  }
  ::-moz-range-thumb {
    -webkit-appearance: none;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 13px solid ${({theme}) => theme.colors.yellow};
    background-color: ${({theme}) => theme.colors.black};
    cursor: pointer;
  }
  ::-moz-range-progress {
    -webkit-appearance: none;
  }
  ::-ms-thumb {
    -webkit-appearance: none;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 13px solid ${({theme}) => theme.colors.yellow};
    background-color: ${({theme}) => theme.colors.black};
    cursor: pointer;
  }
  ::-ms-fill-lower {
    -webkit-appearance: none;
  }
  ::-ms-fill-upper {
    -webkit-appearance: none;
  }
`

const Range: React.FC<IRangeProps> = (props) => {
    const {min, max, step, value, creator} = props
    const dispatch = useDispatch()

    return (
        <RangeWrapper>
            <StyledRange onChange={(e) => dispatch(creator(parseInt(e.target.value)))} type='range' {...props}/>
            <Progress value={value} min={min} max={max} step={step} />
        </RangeWrapper>
    );
};

export default Range;