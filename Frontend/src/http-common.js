import axios from "axios";

export default axios.create({
  baseURL: "https://api.raghavendiran.tech/api",
  headers: {
    "Content-type": "application/json",
  },
});
