import axios from "axios";


const instance2 = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",

  },
});
export default instance2;
