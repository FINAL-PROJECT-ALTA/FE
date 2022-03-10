const initialState = []

const getFoodsReducers = (state = initialState, action) => {
    if (action.type === "SET_FOODS") {
        if (Array.isArray(action.payload)) return action.payload
    }

    return state
}

export default getFoodsReducers