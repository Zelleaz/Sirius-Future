import {
    GameAction,
    GameActionTypes,
    IGameState
} from "../../../types/reducers/game/gameReducerTypes";

const initialState: IGameState = {
    words: [],
    currentIndex: 0,
    isGameFinished: true,
    speed: 1,
    wordsLength: 6,
    wordsSpacing: 5,
    spacingIncr: 5,
    wordsValue: 6,
    margin: 5
}

export const gameReducer = (state: IGameState = initialState, {type, payload}: GameAction) => {
    switch (type) {
        case GameActionTypes.finish:
            return {
                ...initialState
            }
        case GameActionTypes.initWords:
            return {
                ...state,
                words: payload
            }
        case GameActionTypes.setMargin:
            return {
                ...state,
                margin: payload
            }
        case GameActionTypes.start: {
            return {
                ...state,
                // @ts-ignore
                ...payload,
                isGameFinished: false,
            }
        }
        case GameActionTypes.setIndex:
            return {
                ...state,
                currentIndex: payload
            }
        default: return state
    }
}