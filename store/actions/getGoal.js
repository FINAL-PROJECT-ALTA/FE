import axios from 'axios'

export const fetchAllGoal = () => {
    return (dispatch) => {
        const getToken = localStorage.getItem('token')
        axios.get('https://aaryadewangga.cloud.okteto.net/users/goals', {
            headers: { Authorization: `Bearer ${getToken}` }
        })
            .then(({ data }) => {
                // console.log(data.data);
                dispatch(setGoal(data.data))
            })
            .catch(err => {
                // console.log(err.response);
                localStorage.removeItem("token");
            })
    }
}

export const setGoal = (payload) => {
    return {
        type: "SET_GOAL", payload
    }
}