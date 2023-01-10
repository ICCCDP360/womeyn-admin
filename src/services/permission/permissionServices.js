import { HttpInterceptor } from "../auth/http-interceptors";

export function PermissionListServices() {
  return HttpInterceptor.get(`/common/permission`);
}
