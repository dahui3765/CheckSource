import axios from "axios";
import router from "../router";
import store from "../store";
import swal from "@/api/alert.js";

const instance = axios.create({
  baseURL: "http://checksource.io:8080",
  // baseURL: "http://localhost:8080",
});

// request 요청 전에 header에 토큰값을 넣기 위한 interceptor
instance.interceptors.request.use((config) => {
  if (store.getters.getAccessToken != null) {
    config["headers"] = {
      TOKEN: store.getters.getAccessToken,
    };
  } else {
    config["headers"] = {
      TOKEN: "",
    };
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status == "403") {
      swal.warning("토큰 기한이 만료되었습니다.");
      store.commit("LOGOUT");
      router.push("/");
      return Promise.reject(error);
    }
  }
);

export default instance;
