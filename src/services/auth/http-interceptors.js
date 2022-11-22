import axios from "axios";

let userids = "ac55e5ce-b87b-494f-a489-a4ae9e44dc56";
let auth_routes = ["/sellers", "/users"];
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config.url, "first");
    if (auth_routes.indexOf(config.url) !== -1) {
      const token = localStorage.getItem("access_token");
      config.url = process.env.REACT_APP_APIURL2 + config.url;
      console.log(config.url, "second");
      config.headers = {
        ...config.headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    } else if (auth_routes.indexOf(config.url) === 0) {
      const token = localStorage.getItem("access_token");
      config.url = process.env.REACT_APP_APIURL2 + config.url;
      console.log(config.url, "second");
      config.headers = {
        ...config.headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    } else {
      config.url = process.env.REACT_APP_APIURL + config.url;
      console.log(config.url, "third");
    }
    console.log(config.url, "fourth");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const HttpInterceptor = axios;
