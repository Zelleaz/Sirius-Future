import React from "react";
import {FormReducerAction} from "./reducers/form/formReducerTypes";

export interface IFlexProps {
    justify: string
    align: string
    direction: string
    margin?: string
    width?: string
    minHeight?: string
}

type creator = (payload: number) => FormReducerAction

export interface ILayoutProps {
    title: string
    isGame?: boolean
}

export interface IRangeProps {
    min: number
    max: number
    step: number
    value: number
    creator: creator
}

export interface IProgressProps {
    value: number
    min: number
    max: number
    step: number
}

export interface ISettingCardProps {
    title: string
    min: number
    max: number
    step: number
    defaultValue: number
    flexBasis: number
    value: number
    creator: creator
}

export interface IControlButtonProps extends React.HTMLAttributes<HTMLElement>{
    isDecr: boolean
    margin?: string
}

export interface ISpeedSettingCardProps {
    startedValue?: number,
    flexBasis: number,
    value: number
    creator: creator
}

export interface IGameStepProps {
    word: string
    time: number
}