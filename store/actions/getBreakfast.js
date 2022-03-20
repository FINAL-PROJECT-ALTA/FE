import axios from 'axios'
import Swal from 'sweetalert2';

export const fetchAllBreakfast = () => {
    return (dispatch) => {
        const getToken = localStorage.getItem('token')
        axios.get('https://aaryadewangga.cloud.okteto.net/menus/recommend/breakfast', {
            headers: { Authorization: `Bearer ${getToken}` }
        })
            .then(({ data }) => {
                // console.log(data.data);
                dispatch(setBreakfast(data.data))
            })
            .catch(err => {
                console.log(err.response);
                // localStorage.removeItem("token");
                Swal.fire('Your Goal Empty', 'Please input your goal', 'warning');

            })
    }
}

export const setBreakfast = (payload) => {
    return {
        type: "SET_BREAKFAST", payload
    }
}