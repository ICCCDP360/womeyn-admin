import { HttpInterceptor } from "../auth/http-interceptors";

export function getSellerServices(id) {
  return HttpInterceptor.get(
    `/admin/sellers?sortBy=_id:desc&&limit=100&&typeId=${id}`
  );
}

export function getSellerByIdServices(id) {
  return HttpInterceptor.get(`/admin/seller/profile/${id}`);
}

export function sellerApprovalServices(id, data) {
  return HttpInterceptor.patch(`/admin/sellers/${id}`, data);
}

export function getContentUpdateServices() {
  return HttpInterceptor.get(`/admin/sellers/content-updated?typeId=0`);
}
