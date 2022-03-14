import { fetchAllFoods, setFood } from "./getFoods";
import { fetchAllMenus, setMenu } from "./getMenus";
import { fetchAllBreakfast, setBreakfast } from "./getBreakfast";
import { fetchAllLunch, setLunch } from "./getLunch";
import { fetchAllDinner, setDinner } from "./getDinner";
import { fetchAllSnack, setSnack } from "./getSnack";

const allStore = {
    fetchAllFoods, setFood, fetchAllMenus, setMenu, fetchAllBreakfast, setBreakfast, fetchAllLunch, setLunch,
    fetchAllDinner, setDinner, fetchAllSnack, setSnack
};

export default allStore;