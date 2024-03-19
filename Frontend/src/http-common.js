import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.1.200:6868/api",
  headers: {
    "Content-type": "application/json",
  },
});
