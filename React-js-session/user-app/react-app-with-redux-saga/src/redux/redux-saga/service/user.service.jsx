import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
export function getUserService() {
  return axios.get("users");
}

export function getPostByUserIdService(userId) {
  return axios.get(`posts?userId=${userId}`);
}
