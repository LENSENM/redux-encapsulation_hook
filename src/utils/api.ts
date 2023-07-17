import http from "./axios";

export const getList = (url:any, data:object) => {
 return http.get(url, {params: {}});
};

