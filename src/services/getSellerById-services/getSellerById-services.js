import { HttpInterceptor } from "../auth/http-interceptors";

export function GetSellerByIdServices(id) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.get(`/admin/seller/profile/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
