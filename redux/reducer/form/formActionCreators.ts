import {FormActionTypes, FormReducerAction} from "../../../types/reducers/form/formReducerTypes";


export const spacingIncrCreator = (payload: number): FormReducerAction => {
    return {
        type: FormActionTypes.spacingIncr,
        payload
    }
}

export const wordsLengthCreator = (payload: number): FormReducerAction => {
    return {
        type: FormActionTypes.wordsLength,
        payload
    }
}

export const formFinishCreator = (): FormReducerAction => {
    return {
        type: FormActionTypes.reset
    }
}

export const startSpacingCreator = (payload: number): FormReducerAction => {
    return {
        type: FormActionTypes.startSpacing,
        payload
    }
}

export const wordsValueCreator = (payload: number): FormReducerAction => {
    return {
        type: FormActionTypes.wordsValue,
        payload
    }
}

export const speedCreator = (payload: number): FormReducerAction => {
    return {
        type: FormActionTypes.speedValue,
        payload
    }
}

