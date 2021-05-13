import {IAction} from "../action";

export interface IGameState {
    words: string[]
    currentIndex: number
    isGameFinished: boolean
    speed: number
    wordsLength: number
    wordsSpacing: number
    spacingIncr: number
    wordsValue: number
    margin: number
}

export enum GameActionTypes {
    initWords = 'INITIALIZE_WORDS_FROM_DB',
    setIndex = 'SET_CURRENT_WORD_INDEX',
    finish = 'FINISH_THE_GAME',
    start = 'START_THE_GAME',
    setMargin = 'CHANGE_MARGIN',
}

export interface IStartPayload {
    speed: number
    wordsLength: number
    wordsSpacing: number
    spacingIncr: number
    wordsValue: number
}

type payload = number | boolean | string[] | IStartPayload

export type GameAction = IAction<GameActionTypes, payload>
