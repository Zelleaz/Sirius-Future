import {GameAction, GameActionTypes, IStartPayload} from "../../../types/reducers/game/gameReducerTypes";

export const finishGame = (): GameAction => {
    return {
        type: GameActionTypes.finish,
    }
}

export const setIndexCreator = (payload: number): GameAction => {
    return {
        type: GameActionTypes.setIndex,
        payload
    }
}

export const setMarginCreator = (payload: number): GameAction => {
    return {
        type: GameActionTypes.setMargin,
        payload
    }
}

export const startGameCreator = (payload: IStartPayload): GameAction => {
    return {
        type: GameActionTypes.start,
        payload,
    }
}

export const initWordsCreator = (payload: string[]): GameAction => {
    return {
        type: GameActionTypes.initWords,
        payload
    }
}