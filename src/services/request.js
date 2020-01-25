export function request(url, opt) {
  return fetch(url, opt)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
}

export function get(url) {
  return request(url, { method: "GET" });
}

export function post(url, opt) {
  return request(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(opt)
  });
}
