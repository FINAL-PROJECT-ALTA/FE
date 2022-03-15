const initialState = []

const getDinnerReducers = (state = initialState, action) => {
    if (action.type === "SET_DINNER") {
        if (Array.isArray(action.payload)) return action.payload
    }

    return state
}

export default getDinnerReducers