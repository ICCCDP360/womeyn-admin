import { HttpInterceptor } from "../auth/http-interceptors";

export function sellerServices() {
  return HttpInterceptor.get(`/admin/sellers?sortBy=_id:desc`);
}