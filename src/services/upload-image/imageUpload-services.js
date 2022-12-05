import { HttpInterceptor } from "../auth/http-interceptors";

export function imageUploadServices(id, data) {
  console.log("data", data);
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/admin/update-photo/${id}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}