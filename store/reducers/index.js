import { combineReducers } from "redux";

import listFoods from './getFoodsReducers'
import listMenus from './getMenusReducers'
import listBreakfast from './getBreakfastReducers'
import listLunch from './getLunchReducers'
import listDinner from './getDinnerReducers'
import listSnack from './getSnackReducers'
import listAddMenu from './addMenuReducers'
import listUser from './getUserReducers'
import listGoal from './getGoalReducers'



const rootReducer = combineReducers({
    listFoods, listMenus, listBreakfast, listLunch, listDinner, listSnack, listAddMenu, listUser, listGoal
})

export default rootReducer;