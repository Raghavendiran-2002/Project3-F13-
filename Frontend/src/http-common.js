import axios from "axios";

export default axios.create({
  baseURL: "http://api.raghavendiran.tech/api",
  headers: {
    "Content-type": "application/json",
  },
});
