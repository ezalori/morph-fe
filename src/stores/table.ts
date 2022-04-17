import { defineStore } from 'pinia'
import * as service from '@/services/table'

export const useTableStore = defineStore('table', {
  state: () => ({
    tableList: [],
    columnList: [],
  }),

  actions: {
    async getTableList() {
      const response = await service.getTableList()
      this.tableList = response.tables
    },

    async getTableColumns(params: object) {
      const response = await service.getTableColumns(params)
      this.columnList = response.columns
    },
  },
})
