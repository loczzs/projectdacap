const baseUrl = "https://62da614a9eedb699636cab62.mockapi.io/cty";
const baseUrlz ="https://62da614a9eedb699636cab62.mockapi.io/request";

// hàm call API lấy danh sách sản phẩm
function apiGetCty(search) {
  return axios({
    url: baseUrl,
    method: "GET",
    params: {
        info: search, // products?name=Xiaomi
      },
  });
}
function apiGetCtydetail(ctyId) {
  return axios({
    url: `${baseUrl}/${ctyId}`,
    method: "GET",
  });
}
function apiUpdatecty(cty){
    return axios({
        url: `${baseUrl}/${cty.id}`  ,
        method: "PUT",
        data:cty
      });
}
function apiResetcheck(cty){
  return axios({
      url: baseUrl  ,
      method: "PUT",
      data:cty
    });
}
function apiAddcty(cty) {
  return axios({
    url: baseUrl,
    method: "POST",
    data: cty,
  });
}
function apideleteCty(ctyId) {
  return axios({
    url: `${baseUrl}/${ctyId}`,
    method: "DELETE",
  });
}
function apiGetrequest(search) {
  return axios({
    url: baseUrlz,
    method: "GET",
    params: {
        info: search, // products?name = "Xiaomi"
      },
  });
}
function apideleteReque(ctyId) {
  return axios({
    url: `${baseUrlz}/${ctyId}`,
    method: "DELETE",
  });
}
function apiGetRequestdetail(ctyId) {
  return axios({
    url: `${baseUrlz}/${ctyId}`,
    method: "GET",
  });
}
function apiGetCtyz(type) {
  return axios({
    url: baseUrl,
    method: "GET",
    params: {
      type: type, // products?name = "Xiaomi"
      },
  });
}