import _ from 'lodash'
import {
  queryTableList,
  queryTable,
  queryColumns,
  saveTable,
} from '@/services/table'

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
    async fetchTableList({ commit }, payload) {
      let response = await queryTableList(payload)
      if (response && response.payload) {
        commit(types.SAVE, {
          tableList: response.payload.tables,
        })
      }
    },

    async fetchTable({ commit }, payload) {
      let response = await queryTable(payload)
      if (response && response.payload) {
        commit(types.SAVE, {
          table: response.payload.table,
          columnList: response.payload.columns,
        })
      }
    },

    async fetchColumns({ commit }, payload) {
      let response = await queryColumns(payload)
      if (response && response.payload) {
        commit(types.SAVE, {
          columnList: response.payload.columns,
        })
      }
    },

    async save({ commit }, payload) {
      let response = await saveTable(payload)
      if (response && response.payload) {
        commit(types.SAVE, {
          table: {
            ...payload,
            id: response.payload.id,
          },
        })
      }
    },
  },

  mutations: {
    [types.SAVE](state, payload) {
      _.assign(state, payload)
    },
  },
}
