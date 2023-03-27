import { HttpInterceptor } from "../auth/http-interceptors";

export function customer() {
  return HttpInterceptor.get(
    `/admin/customers?sortBy=updatedAt:desc&&limit=100`
  );
}
