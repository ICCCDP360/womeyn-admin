import { HttpInterceptor } from "../auth/http-interceptors";

export function getSellerServices() {
  return HttpInterceptor.get(`/admin/sellers?sortBy=_id:desc&&limit=100`);
}

export function getSellerByIdServices(id) {
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

export function sellerApprovalServices(id, data) {
  return HttpInterceptor.patch(`/admin/sellers/${id}`, data);
}
