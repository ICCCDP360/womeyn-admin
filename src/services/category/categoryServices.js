import { HttpInterceptor } from "../auth/http-interceptors";

export function createCategory(data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post("/admin/create-category", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getProductCategory() {
  return HttpInterceptor.get(`/admin/categories-list?typeId=1`);
}

export function getServiceCategory() {
  return HttpInterceptor.get(`/admin/categories-list?typeId=2`);
}
