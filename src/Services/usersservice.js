import axios from "axios"
import { GITHUB_BASE_URL } from "../Config/config"


const fetchUsers = async() =>{
    try {
        const users = await axios.get(`${GITHUB_BASE_URL}/users`)
        return users.data
    }
    catch(error){
        console.log('Error occured fetching users =>',error.message)
        return []
    }
}


const searchUsers = async(user_name) =>{
    try {
        const users = await axios.get(`${GITHUB_BASE_URL}/search/users?q=${user_name}&order=desc&per_page=3`)
        return users.data
    }
    catch(error){
        console.log('Error occured fetching users =>',error.message)
        return []
    }
}

export {fetchUsers}