import { HttpInterceptor } from "../auth/http-interceptors";

export function getPlacementList() {
  return HttpInterceptor.get(`/admin/placements`);
}

export function addPlacement(data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post("/admin/placements", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getPlacementProperties(id) {
  return HttpInterceptor.get(`/admin/properties/${id}`);
}

export function addPlacementProperties(id, data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/admin/properties/${id}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function updatePlacement(id, data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/admin/update-placement/${id}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getSinglePlacement(id) {
  return HttpInterceptor.get(`/admin/get-placement-details/${id}`);
}

export function updateProperties(id, data) {
  return new Promise((resolve, reject) => {
    HttpInterceptor.post(`/admin/update-property/${id}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getSingleProperty(id) {
  return HttpInterceptor.get(`/admin/get-property-details/${id}`);
}
