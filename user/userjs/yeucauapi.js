

baseUrl ="https://62da614a9eedb699636cab62.mockapi.io/request";
function apiAddproduct(cty) {
    return axios({
      url: baseUrl,
      method: "POST",
      data: cty,
    });
  }