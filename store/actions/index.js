import { fetchAllFoods, setFood } from "./getFoods";
import { fetchAllMenus, setMenu } from "./getMenus";
import { fetchAllBreakfast, setBreakfast } from "./getBreakfast";
import { fetchAllLunch, setLunch } from "./getLunch";
import { fetchAllDinner, setDinner } from "./getDinner";
import { fetchAllSnack, setSnack } from "./getSnack";
import { fetchAllUser, setUser } from "./getUser";
import { fetchAllGoal, setGoal } from "./getGoal";
// import { setAddMenu } from "./addMenu";


const allStore = {
    fetchAllFoods, setFood, fetchAllMenus, setMenu, fetchAllBreakfast, setBreakfast, fetchAllLunch, setLunch,
    fetchAllDinner, setDinner, fetchAllSnack, setSnack, fetchAllUser, setUser, fetchAllGoal, setGoal
};

export default allStore;