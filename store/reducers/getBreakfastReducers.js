const initialState = []

const getBreakfastReducers = (state = initialState, action) => {
    if (action.type === "SET_BREAKFAST") {
        if (Array.isArray(action.payload)) return action.payload
    }

    return state
}

export default getBreakfastReducers