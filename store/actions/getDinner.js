import axios from 'axios'

export const fetchAllDinner = () => {
    return (dispatch) => {
        const getToken = localStorage.getItem('token')
        axios.get('https://aaryadewangga.cloud.okteto.net/menus/recommend/dinner', {
            headers: { Authorization: `Bearer ${getToken}` }
        })
            .then(({ data }) => {
                // console.log(data.data);
                dispatch(setDinner(data.data))
            })
            .catch(err => {
                console.log(err.response);
                localStorage.removeItem("token");
            })
    }
}

export const setDinner = (payload) => {
    return {
        type: "SET_DINNER", payload
    }
}