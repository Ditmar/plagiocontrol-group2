import AxiosFactory from './Axios'

export const authService = {
  register: (data = {}) => {
    const api = AxiosFactory()
    return api.post('/server/autenthication/register', data)
  },
}