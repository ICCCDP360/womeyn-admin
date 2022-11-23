import { HttpInterceptor } from "../auth/http-interceptors";

export function getUserServices(id) {
  console.log("interceptor", HttpInterceptor);
  return HttpInterceptor.get(`/admin/users/${id}`);
}
