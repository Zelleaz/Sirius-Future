import {IAction} from "../action";

export interface FormReducerState {
    wordsValue: number
    wordsSpacing: number
    wordsLength: number
    spacingIncr: number
    speed: number
}

export enum FormActionTypes {
    wordsValue = 'CHANGE_WORDS_VALUE',
    wordsLength = 'CHANGE_WORDS_LENGTH',
    startSpacing = 'CHANGE_START_SPACING',
    spacingIncr = 'CHANGE_SPACING_INCREASE',
    speedValue = 'CHANGE_SPEED_VALUE',
    reset = 'RESET_FORM_VALUES',
}

export type FormReducerAction = IAction<FormActionTypes, number>
