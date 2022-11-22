import { HttpInterceptor } from "../auth/http-interceptors";

export function getUserServices(id) {
  return HttpInterceptor.get(`/users/${id}`);
}
