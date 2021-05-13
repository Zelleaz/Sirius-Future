import {combineReducers} from "redux";
import {formReducer} from "./form/formReducer";
import {gameReducer} from "./game/gameReducer";

export const rootReducer = combineReducers({
    form: formReducer,
    game: gameReducer
})

export type RootState = ReturnType<typeof rootReducer>
