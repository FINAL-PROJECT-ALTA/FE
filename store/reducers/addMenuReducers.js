const initialState = [];

export default function listAddMenu(state = initialState, action) {
    if (action.type === "SET_ADD_MENU") {
        return [...state, action.payload];
    }
    return state;
}