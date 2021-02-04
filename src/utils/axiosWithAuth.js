import axios from 'axios'

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://bw-tt32-secret-family-recipes.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth