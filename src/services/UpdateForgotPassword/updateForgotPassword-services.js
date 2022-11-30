import { HttpInterceptor } from "../auth/http-interceptors";

export function updateForgotPasswordServices(value, data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/auth/admin/reset-password?token=${value}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
