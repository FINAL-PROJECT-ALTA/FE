import axios from 'axios'

export const fetchAllUser = () => {
    return (dispatch) => {
        const getToken = localStorage.getItem('token')
        axios.get('https://aaryadewangga.cloud.okteto.net/users', {
            headers: { Authorization: `Bearer ${getToken}` }
        })
            .then(({ data }) => {
                // console.log(data.data);
                dispatch(setUser(data.data.goal))
            })
            .catch(err => {
                console.log(err.response);
                localStorage.removeItem("token");
            })
    }
}

export const setUser = (payload) => {
    return {
        type: "SET_USER", payload
    }
}