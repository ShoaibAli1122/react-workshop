import axios from "axios";

export default axios.create({
  baseURL: "https://products-crud-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
