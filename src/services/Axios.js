import axios from 'axios'

const API_URL = 'http://3.138.158.90:8000'

export default function AxiosFactory(path = '') {
  const axiosInstance = axios.create({ baseURL: `${API_URL}${path}` })

  axiosInstance.interceptors.response.use(
    function (response) {
      return Promise.resolve(response)
    },
    function (error) {
      let responseError
      if (error.response) {
        responseError = new Error(error.response.data)
      } else if (error.request) {
        responseError = new Error(error.request)
      } else {
        responseError = new Error(error.message)
      }
      return Promise.reject(responseError)
    }
  )
  return axiosInstance
}