import axios from "axios";

const authFetch = axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`
    }
})

export default authFetch;