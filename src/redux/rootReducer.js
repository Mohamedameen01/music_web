import { combineReducers } from "redux";
import songReducer from "./songs/songReducer";

const rootReducer = combineReducers({
    songData: songReducer
})

export default rootReducer