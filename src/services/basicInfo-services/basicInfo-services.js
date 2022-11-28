import { HttpInterceptor } from "../auth/http-interceptors";

export function getBasicInfoServices(id) {
  console.log("interceptor", HttpInterceptor);
  return HttpInterceptor.get(`/admin//basicinfo/${id}`);
}
