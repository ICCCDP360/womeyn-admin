import { HttpInterceptor } from "../auth/http-interceptors";

export function createAdmin(data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post("/admin/users", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function updateAdminServices(id, data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/admin/updatebasicinfo/${id}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function updateAdminSocialProfileServices(id, data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/admin/updatesocialinfo/${id}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function updateAdminImageServices(id, data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/admin/update-photo/${id}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getAdminServices() {
  return HttpInterceptor.get(`/admin/users?sortBy=_id:desc&&limit=100`);
}

export function getAdminByIdServices(id) {
  return HttpInterceptor.get(`/admin/users/${id}`);
}

export function getAdminBasicInfoServices(id) {
  return HttpInterceptor.get(`/admin//basicinfo/${id}`);
}
