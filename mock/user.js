function login(req, res) {
  res.json({
    payload: {
      id: 1,
      username: 'Jerry',
    },
  })
  // res.status(400).json({
  //   message: 'Invalid username or password.',
  // })
}

function logout(req, res) {
  res.json({})
}

function getUserList(req, res) {
  res.json({
    payload: [
      { id: 1, username: 'Jerry', is_current: 1 },
      { id: 2, username: 'Ope', is_current: 0 },
    ],
  })
}

module.exports = {
  'POST /api/login': login,
  'POST /api/logout': logout,
  'GET /api/user/list': getUserList,
}
