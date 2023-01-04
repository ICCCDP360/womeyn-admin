import { HttpInterceptor } from "../auth/http-interceptors";

export function ProductListServices() {
  return HttpInterceptor.get(`/admin/products-list?sortBy=_id:desc&&limit=100`);
}