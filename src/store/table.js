import _ from 'lodash'
import * as service from '@/services/table'

const types = {
  SAVE: 'save',
}

export default {
  namespaced: true,

  state: {
    tableList: [],
    table: null,
    columnList: [],
  },

  actions: {
    async getTableList({ commit }, payload) {
      let response = await service.getTableList(payload)
      if (response && response.payload) {
        commit(types.SAVE, {
          tableList: response.payload.tables,
        })
      }
    },

    async getTable({ commit }, payload) {
      let response = await service.getTable(payload)
      if (response && response.payload) {
        commit(types.SAVE, {
          table: response.payload.table,
          columnList: response.payload.columns,
        })
      }
    },

    async saveTableColumns({ commit }, payload) {
      let response = await service.getTableColumns(payload)
      if (response && response.payload) {
        commit(types.SAVE, {
          columnList: response.payload.columns,
        })
      }
    },

    async saveTable({ commit }, payload) {
      let response = await service.saveTable(payload)
      if (response && response.payload) {
        commit(types.SAVE, {
          table: {
            ...payload,
            id: response.payload.id,
          },
        })
      }
    },

    async deleteTable({ commit }, payload) {
      await service.deleteTable(payload)
    },
  },

  mutations: {
    [types.SAVE](state, payload) {
      _.assign(state, payload)
    },
  },
}
