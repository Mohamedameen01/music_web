import { legacy_createStore, applyMiddleware } from "redux";
import songReducer from "./songs/songReducer";
import { thunk } from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
const store = legacy_createStore(
    songReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
)
export default store;