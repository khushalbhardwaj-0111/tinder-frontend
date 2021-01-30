import axios from "axios";

const instance = axios.create({
    baseURL:"https://tinderserver0111.herokuapp.com/"
});

export default instance;