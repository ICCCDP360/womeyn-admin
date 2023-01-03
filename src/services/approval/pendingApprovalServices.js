import { HttpInterceptor } from "../auth/http-interceptors";

export function PendingApprovalServices() {
  return HttpInterceptor.get(`/admin/pending-approval-count`);
}
