import { HttpInterceptor } from "../auth/http-interceptors";

export function sellerApprovalServices(id, data) {
  return HttpInterceptor.patch(`/admin/sellers/${id}`, data);
}
