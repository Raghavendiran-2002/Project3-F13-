import axios from "axios";

export default axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL || "http://192.168.1.200:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});
