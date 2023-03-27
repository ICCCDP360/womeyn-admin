const { HttpInterceptor } = require("../auth/http-interceptors");

class LoginServices {
  login = (data) => {
    return new Promise((resolve, reject) => {
      HttpInterceptor.post("/auth/admin/login", data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  logout = (data) => {
    return new Promise((resolve, reject) => {
      localStorage.removeItem("auth");
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("permissions");
      resolve(true);
    });
  };
  asyncAuthStorage = (data) => {
    return new Promise((resolve, reject) => {
      if (!data) {
        reject("param not found");
      }
      localStorage.setItem("auth", true);
      localStorage.setItem("access_token", data.tokens.access.token);
      localStorage.setItem("user_id", data.user.id);
      localStorage.setItem("firstName", data.user.firstName);
      localStorage.setItem("lastName", data.user.lastName);
      localStorage.setItem("permissions", data.user.permissionIds);
      resolve(true);
    });
  };
  useAuth = () => {
    const logged_in = localStorage.getItem("auth");
    return new Promise((resolve, reject) => {
      if (logged_in) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };
}

export default new LoginServices();
