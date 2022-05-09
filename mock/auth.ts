import { MockMethod } from 'vite-plugin-mock'

function getCurrentUser() {
  return {
    id: 1,
    username: 'John Doe',
  }
}

export default [
  {
    url: '/api/current-user',
    response: getCurrentUser,
  },
] as MockMethod[]
