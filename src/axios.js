import axios from "axios";

const axiosInstance = axios({
    baseURL: "http://localhost:8000/api"
})

export default axiosInstance