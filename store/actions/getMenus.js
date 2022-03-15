import axios from 'axios'

export const fetchAllMenus = () => {
    return (dispatch) => {
        // const getToken = localStorage.getItem('token')
        axios.get('https://aaryadewangga.cloud.okteto.net/menus')
            .then(({ data }) => {
                // console.log(data.data);
                dispatch(setMenu(data.data))
            })
            .catch(err => {
                console.log(err.response);
            })
    }
}

export const setMenu = (payload) => {
    return {
        type: "SET_MENUS", payload
    }
}