import { HttpInterceptor } from "../auth/http-interceptors";

export function ProductListServices() {
  return HttpInterceptor.get(`/admin/products-list?sortBy=_id:desc&&limit=100`);
}

export function ProductDetailsServices(id) {
  return HttpInterceptor.get(`/admin/product-details/${id}`);
}

export function ProductApprovalServices(id, data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/admin/product-update-status/${id}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
