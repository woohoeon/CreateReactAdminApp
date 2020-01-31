import axios from 'axios'

const api = axios.create({ baseURL: process.env.API_BASE_URL })

export const apiRequest = (url, params = null) => {
  const accessToken = 'AUTHENTICATION_TOKEN'
  return new Promise((resolve, reject) => {
    api
      .post(url, params, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(res => {
        handleErrors(res)
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const handleErrors = res => {
  if (res.status === 200) return
  switch (res.status) {
    case 400:
      throw new Error('BAD_REQUEST')
    case 401:
      throw new Error('UNAUTHORIZED')
    case 404:
      throw new Error('NOT_FOUND')
    case 499:
      throw new Error('SERVER_ERROR')
    case 500:
      throw new Error('INTERNAL_SERVER_ERROR')
    case 502:
      throw new Error('BAD_GATEWAY')
    case 504:
      throw new Error('GATEWAY_TIMEOUT')
    default:
      throw new Error('UNHANDLED_ERROR')
  }
}
