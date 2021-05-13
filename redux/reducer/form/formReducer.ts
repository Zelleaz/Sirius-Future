import {FormActionTypes, FormReducerAction, FormReducerState} from "../../../types/reducers/form/formReducerTypes";


const initialState: FormReducerState = {
    speed: 1,
    wordsLength: 6,
    wordsSpacing: 20,
    spacingIncr: 15,
    wordsValue: 6
}

export const formReducer = (state: FormReducerState = initialState, {payload, type}: FormReducerAction): FormReducerState => {
    switch (type) {
        case FormActionTypes.spacingIncr:
            return {
                ...state,
                spacingIncr: payload
            }
        case FormActionTypes.reset:
            return initialState
        case FormActionTypes.startSpacing:
            return {
                ...state,
                wordsSpacing: payload
            }
        case FormActionTypes.wordsLength:
            return {
                ...state,
                wordsLength: payload
            }
        case FormActionTypes.wordsValue:
            return {
                ...state,
                wordsValue: payload
            }
        case FormActionTypes.speedValue:
            return {
                ...state,
                speed: payload
            }
        default: return state
    }
}