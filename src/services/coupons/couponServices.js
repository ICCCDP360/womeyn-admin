import { HttpInterceptor } from "../auth/http-interceptors";

export function GetCouponList() {
  return HttpInterceptor.get(`/admin/coupon`);
}

export function addCoupon(data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post("/admin/coupon", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getCouponDetails(id) {
  return HttpInterceptor.get(`/admin/get-coupon-details/${id}`);
}

export function updateCoupon(id, data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/admin/update-coupon/${id}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
