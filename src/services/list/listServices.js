import { HttpInterceptor } from "../auth/http-interceptors";

export function ProductListServices() {
  return HttpInterceptor.get(
    `/admin/products-list?sortBy=updatedAt:desc&&limit=100`
  );
}

export function ProductDetailsServices(id) {
  return HttpInterceptor.get(`/admin/product-details/${id}`);
}

export function ProductApprovalServices(id, data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/admin/product-update-status/${id}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function ServicesList() {
  return HttpInterceptor.get(
    `/admin/services-list/:userId?sortBy=_id:desc&&limit=200`
  );
}

export function ApprovedSellerServices() {
  return HttpInterceptor.get(
    `/admin/sellers?sortBy=_id:desc&&limit=100&&typeId=1&&stateId=1`
  );
}

export function getProductContentUpdatedServices() {
  return HttpInterceptor.get(
    `/admin/products/content-updated?sortBy=updatedAt:desc`
  );
}

export function OrdersList() {
  return HttpInterceptor.get(`/admin/orders?sortBy=updatedAt:desc&&limit=100`);
}

export function OrdersListByStatus(id) {
  return HttpInterceptor.get(`/admin/orders?stateId=${id}`);
}

export function FilterOrder(stateId, fromDate, toDate) {
  return HttpInterceptor.get(
    `/admin/orders?sortBy=updatedAt:desc&&limit=100&&stateId=${stateId}&&fromDate=${fromDate}&toDate=${toDate}`
  );
}

export function OrdersDetailsById(id) {
  return HttpInterceptor.get(`/admin/orders?orderId=${id}`);
}
