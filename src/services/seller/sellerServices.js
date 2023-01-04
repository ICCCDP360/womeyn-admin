import { HttpInterceptor } from "../auth/http-interceptors";

export function getSellerServices() {
  return HttpInterceptor.get(`/admin/sellers?sortBy=_id:desc&&limit=100`);
}

export function getSellerByIdServices(id) {
  return HttpInterceptor.get(`/admin/seller/profile/${id}`);
}

export function sellerApprovalServices(id, data) {
  return HttpInterceptor.patch(`/admin/sellers/${id}`, data);
}
