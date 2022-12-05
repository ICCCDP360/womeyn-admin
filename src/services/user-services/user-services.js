import { HttpInterceptor } from "../auth/http-interceptors";

export function userServices() {
  return HttpInterceptor.get(`/admin/users/?sortBy=_id:desc`);
}
