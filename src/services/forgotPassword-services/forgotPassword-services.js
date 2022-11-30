import { HttpInterceptor } from "../auth/http-interceptors";

export function forgotPasswordServices(data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post("/auth/admin/forgot-password", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
