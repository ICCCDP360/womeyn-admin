import { HttpInterceptor } from "../auth/http-interceptors";

export function updateUserServices(id, data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/admin/updatebasicinfo/${id}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
