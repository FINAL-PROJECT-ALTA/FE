import { combineReducers } from "redux";

import listFoods from './getFoodsReducers'

const rootReducer = combineReducers({
    listFoods
})

export default rootReducer;