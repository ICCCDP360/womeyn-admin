import { HttpInterceptor } from "../auth/http-interceptors";

export function updateSocialProfileServices(id, data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/admin/updatesocialinfo/${id}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
