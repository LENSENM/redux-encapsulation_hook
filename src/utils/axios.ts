import axios from "axios";

const instance = axios.create({
  timeout: 120000,
});


export default instance