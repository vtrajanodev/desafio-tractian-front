import Axios from 'axios'

const api = Axios.create({baseURL: 'https://tractian-api.herokuapp.com/'})

export default api;