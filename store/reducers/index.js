import { combineReducers } from "redux";

import listFoods from './getFoodsReducers'
import listMenus from './getMenusReducers'

const rootReducer = combineReducers({
    listFoods, listMenus
})

export default rootReducer;