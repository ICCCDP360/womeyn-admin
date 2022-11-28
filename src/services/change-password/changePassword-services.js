import { HttpInterceptor } from "../auth/http-interceptors";

export function changePasswordServices(data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post("/admin/change-password", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
