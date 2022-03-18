const initialState = []

const getGoalReducers = (state = initialState, action) => {
    if (action.type === "SET_USER") {
        return action.payload
    }

    return state
}

export default getGoalReducers