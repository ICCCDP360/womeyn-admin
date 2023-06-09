import axios from "axios";
axios.interceptors.request.use(
  function (config) {
    if (config.url === "/auth/admin/login") {
      config.url = process.env.REACT_APP_APIURL + config.url;
    } else if (config.url === "/auth/admin/forgot-password") {
      config.url = process.env.REACT_APP_APIURL + config.url;
    } else if (config.url.search("/admin/update-photo") !== -1) {
      const token = localStorage.getItem("access_token");
      config.url = process.env.REACT_APP_APIURL + config.url;

      config.headers = {
        ...config.headers,
        "Content-Type": false,
        "process-data": false,
        cache: false,
        "data-type": "Text",
        Authorization: `Bearer ${token}`,
      };
    } else if (config.url.search(`/admin/properties`) !== -1) {
      const token = localStorage.getItem("access_token");
      config.url = process.env.REACT_APP_APIURL + config.url;

      config.headers = {
        ...config.headers,
        "Content-Type": false,
        // "Content-Type": "application/json",
        "process-data": false,
        cache: false,
        "data-type": "Text",
        Authorization: `Bearer ${token}`,
      };
    } else if (config.url.search(`/admin/update-property`) !== -1) {
      const token = localStorage.getItem("access_token");
      config.url = process.env.REACT_APP_APIURL + config.url;

      config.headers = {
        ...config.headers,
        "Content-Type": false,
        // "Content-Type": "application/json",
        "process-data": false,
        cache: false,
        "data-type": "Text",
        Authorization: `Bearer ${token}`,
      };
    } else if (config.url.search("/admin/create-category") !== -1) {
      const token = localStorage.getItem("access_token");
      config.url = process.env.REACT_APP_APIURL + config.url;

      config.headers = {
        ...config.headers,
        "Content-Type": false,
        "process-data": false,
        cache: false,
        "data-type": "Text",
        Authorization: `Bearer ${token}`,
      };
    } else {
      const token = localStorage.getItem("access_token");
      config.url = process.env.REACT_APP_APIURL + config.url;

      config.headers = {
        ...config.headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }
    // Do something before request is sent
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
