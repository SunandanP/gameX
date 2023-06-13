import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c3929869ad4f48d4a5b9b564e177e972",
  },
});
