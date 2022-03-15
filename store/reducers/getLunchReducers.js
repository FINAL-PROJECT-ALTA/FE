const initialState = []

const getLunchReducers = (state = initialState, action) => {
    if (action.type === "SET_LUNCH") {
        if (Array.isArray(action.payload)) return action.payload
    }

    return state
}

export default getLunchReducers