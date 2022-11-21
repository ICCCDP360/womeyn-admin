import { HttpInterceptor } from "../auth/http-interceptors";

export function sellerServices() {
  return HttpInterceptor.get("/sellers");
}
