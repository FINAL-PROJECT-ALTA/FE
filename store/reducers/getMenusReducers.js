const initialState = []

const getMenusReducers = (state = initialState, action) => {
    if (action.type === "SET_MENUS") {
        if (Array.isArray(action.payload)) return action.payload
    }

    return state
}

export default getMenusReducers