import { HttpInterceptor } from "../auth/http-interceptors";

export function getRecommendation(id) {
  return HttpInterceptor.get(`/admin/get-top-items?typeId=${id}`);
}

export function addRecommendation(data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post("/admin/create-top-items", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
