import axios from 'axios'

export const fetchAllSnack = () => {
    return (dispatch) => {
        const getToken = localStorage.getItem('token')
        axios.get('https://aaryadewangga.cloud.okteto.net/menus/recommend/overtime', {
            headers: { Authorization: `Bearer ${getToken}` }
        })
            .then(({ data }) => {
                // console.log(data.data);
                dispatch(setSnack(data.data))
            })
            .catch(err => {
                console.log(err.response);
                // localStorage.removeItem("token");
            })
    }
}

export const setSnack = (payload) => {
    return {
        type: "SET_SNACK", payload
    }
}