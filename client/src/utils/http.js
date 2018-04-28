// utils/http.js

export const get = (url) => {
  return fetch(`/api/${url}`, {
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin"
  })
}

export const post = (url, body) => {
  return fetch(`/api/${url}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin"
  })
}
