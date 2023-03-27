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
  return HttpInterceptor.get(
    `/admin/categories-list?typeId=1&&sortBy=_id:desc`
  );
}

export function deleteProductCategory(id) {
  return HttpInterceptor.delete(`/admin/delete-category/${id}`);
}

export function deleteProductSubCategory(id) {
  return HttpInterceptor.delete(`/admin/delete-sub-category/${id}`);
}

export function getProductSubCategory(id) {
  return HttpInterceptor.get(
    `/admin/categories-list?typeId=1&&categoryId=${id}&&sortBy=_id:desc`
  );
}

export function getServiceCategory() {
  return HttpInterceptor.get(
    `/admin/categories-list?typeId=2&&sortBy=_id:desc`
  );
}

export function getServiceSubCategory(id) {
  return HttpInterceptor.get(
    `/admin/categories-list?typeId=2&&categoryId=${id}&&sortBy=_id:desc`
  );
}
