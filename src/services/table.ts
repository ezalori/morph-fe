import request from '@/utils/request'

export async function getTableList() {
  return request('/table/list')
}

export async function getTableColumns(params: object) {
  return request('/table/columns', { params })
}
