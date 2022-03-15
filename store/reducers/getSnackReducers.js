const initialState = []

const getSnackReducers = (state = initialState, action) => {
    if (action.type === "SET_SNACK") {
        if (Array.isArray(action.payload)) return action.payload
    }

    return state
}

export default getSnackReducers