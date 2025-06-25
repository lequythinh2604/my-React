import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
    baseURL: "http://14.225.217.62/",
    headers: {
        "Content-Type": "application/json",
    },
});


export default instance;