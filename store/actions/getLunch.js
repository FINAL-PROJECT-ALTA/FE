import axios from 'axios'

export const fetchAllLunch = () => {
    return (dispatch) => {
        const getToken = localStorage.getItem('token')
        axios.get('https://aaryadewangga.cloud.okteto.net/menus/recommend/lunch', {
            headers: { Authorization: `Bearer ${getToken}` }
        })
            .then(({ data }) => {
                // console.log(data.data);
                dispatch(setLunch(data.data))
            })
            .catch(err => {
                console.log(err.response);
                // localStorage.removeItem("token");
            })
    }
}

export const setLunch = (payload) => {
    return {
        type: "SET_LUNCH", payload
    }
}