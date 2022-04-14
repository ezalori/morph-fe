function getTableList(req, res) {
  let tables = [{
    id: 1,
    sourceInstance: 2,
    sourceDatabase: 'zhuanqian',
    sourceTable: 'user',
    targetInstance: 1,
    targetDatabase: 'dw_stage',
    targetTable: 'ds_user',
    columnList: 'id,create_day',
    createdAt: '2018-08-18 15:53:01',
    updatedAt: '2018-08-18 15:53:01',
  }]

  res.json({
    payload: {
      tables,
    },
  })
}

function saveTable(req, res) {
  res.json({
    code: 200,
    payload: {
      id: 1,
    },
  })
}

function getTable(req, res) {
  let table = {
    id: 1,
    sourceInstance: 2,
    sourceDatabase: 'zhuanqian',
    sourceTable: 'user',
    targetInstance: 1,
    targetDatabase: 'dw_stage',
    targetTable: 'ds_user',
    columnList: 'id,create_day',
  }

  let columns = ['id', 'nickname', 'create_day']

  res.json({
    payload: {
      table,
      columns,
    }
  })
}

function getTableColumns(req, res) {
  let columns = ['id', 'nickname', 'create_day']

  res.json({
    payload: {
      columns,
    }
  })
}

function deleteTable(req, res) {
  res.json({
    payload: {
      message: 'ok',
    },
  })
}

module.exports = {
  'GET /api/table/list': getTableList,
  'POST /api/table/save': saveTable,
  'GET /api/table/get': getTable,
  'GET /api/table/columns': getTableColumns,
  'POST /api/table/delete': deleteTable,
}
