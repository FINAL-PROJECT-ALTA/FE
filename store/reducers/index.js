import { combineReducers } from "redux";

import listFoods from './getFoodsReducers'
import listMenus from './getMenusReducers'
import listBreakfast from './getBreakfastReducers'
import listLunch from './getLunchReducers'
import listDinner from './getDinnerReducers'
import listSnack from './getSnackReducers'

const rootReducer = combineReducers({
    listFoods, listMenus, listBreakfast, listLunch, listDinner, listSnack
})

export default rootReducer;