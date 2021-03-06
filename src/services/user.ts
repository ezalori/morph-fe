import api from '@/common/api'

export async function login(data: object) {
  return api.post('/login', data)
}

export async function logout() {
  return api.post('/logout')
}

export async function getUserList() {
  return api.get('/user/list')
}
