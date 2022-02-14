import axios from "axios";

export default async function fetchUser(){
    try{
        const BASE_URL = "https://api.randomuser.me/"
        const response = await axios.get(BASE_URL);
        const { results } = response.data;
        return results
    }
    catch (error) {
        console.log(error);
    }
}