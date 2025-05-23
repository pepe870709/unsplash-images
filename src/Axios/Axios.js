import axios from "axios";

//App ID: 750417
//Access Key: RGWxCuN-615sQDaPpSVbL6KJKA7QsAQU-2th36dK1_U

console.log(import.meta.env.VITE_API_KEY)

const authFetch = axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`
    }
})

export default authFetch;