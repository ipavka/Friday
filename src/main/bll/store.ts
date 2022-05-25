import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {registrationReducer} from "./reducers/registration-reducer";
import {demonstrateReducer} from "./reducers/demonstrate-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    profile: profileReducer,
    registration: registrationReducer,
    demonstrate: demonstrateReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store
