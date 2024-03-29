import axios from "axios"
import store from "@/store"


axios.defaults.baseURL = "https://backend-newslayers-production.up.railway.app/"

const tokenChange = (token = store.state.auth.user.access) => {
    if (token){
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
    console.log(axios.defaults.headers.common["Authorization"])
}

const cleanToken = () =>{
    axios.defaults.headers.common["Authorization"] = ''
}

export {tokenChange, cleanToken}