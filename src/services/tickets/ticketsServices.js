import { HttpInterceptor } from "../auth/http-interceptors";

export function getTicketList() {
  return HttpInterceptor.get(`/admin/tickets`);
}

export function getTicketListByStateId(id) {
  return HttpInterceptor.get(`/admin/tickets?State=${id}`);
}

export function getTicketView(id) {
  return HttpInterceptor.get(`/admin/ticket-view/${id}`);
}

export function addReply(data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/admin/tickets`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// export function getSellerByIdServices(id) {
//   return HttpInterceptor.get(`/admin/seller/profile/${id}`);
// }

// export function sellerApprovalServices(id, data) {
//   return HttpInterceptor.patch(`/admin/sellers/${id}`, data);
// }

// export function getContentUpdateServices() {
//   return HttpInterceptor.get(`/admin/sellers/content-updated?typeId=0`);
// }

// export function getRecommendedSellers() {
//   return HttpInterceptor.get(
//     `/admin/sellers?sortBy=_id:desc&&limit=100&&typeId=0&&stateId=1`
//   );
// }
