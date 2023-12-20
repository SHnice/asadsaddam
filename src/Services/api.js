import axios from 'axios'

function getAccessToken() {
    const token = localStorage.getItem("access_token") || "";

    return token === "" ? null : token
}

const api = axios.create({
    baseURL: 'https://asadsaddam-backend.vercel.app'
})

export default api
export {
    getAccessToken
}