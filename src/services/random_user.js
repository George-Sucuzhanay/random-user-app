import axios from "axios";

export default async function fetchUser(){
    try{
        const BASE_URL = "https://api.randomuser.me/"
        const response = await axios.get(BASE_URL);
        const { results } = response.data;
        console.log(response)
    }
    catch (error) {
        console.log(error);
    }
}