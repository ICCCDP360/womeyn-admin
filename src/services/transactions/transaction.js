import { HttpInterceptor } from "../auth/http-interceptors";

export function getTransaction(id) {
  return HttpInterceptor.get(`/admin/transactions`);
}

export function getSubscriber(id) {
  return HttpInterceptor.get(`/admin/subscribers`);
}
