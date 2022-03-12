import axios from 'axios'

export const fetchAllFoods = () => {
    return (dispatch) => {
        // const getToken = localStorage.getItem('token')
        axios.get('https://aaryadewangga.cloud.okteto.net/foods')
            .then(({ data }) => {
                // console.log(data.data);
                dispatch(setFood(data.data))
            })
            .catch(err => {
                console.log(err.response);
            })
    }
}

export const setFood = (payload) => {
    return {
        type: "SET_FOODS", payload
    }
}