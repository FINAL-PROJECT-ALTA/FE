const initialState = []

const getGoalReducers = (state = initialState, action) => {
    if (action.type === "SET_USER") {
        if (Array.isArray(action.payload)) return action.payload
    }

    return state
}

export default getGoalReducers