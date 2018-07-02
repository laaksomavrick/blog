import queryString from 'query-string'

export const get = (url, params = null) => {
  const query = params ? `?${queryString.stringify(params)}` : ''
  return fetch(`/api/${url}${query}`, {
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

export const put = (url, body) => {
  return fetch(`/api/${url}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin"
  })
}
