import { HttpInterceptor } from "../auth/http-interceptors";

export function createUsers(data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post("/admin/users", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
