import Axios from 'axios'

const api = Axios.create({baseURL: 'http://tractian-api.herokuapp.com'})

export default api;