const { Server } = require('@pollyjs/node-server')
const server = new Server({
  port: 3000,
  apiNamespace: 'delta'
})

server.app
  .post('/admin/api/maintenance/status', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*').send({ maintenance: true })
  })
  .post('/admin/api/maintenance/enable', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*').send({})
  })
  .post('/admin/api/maintenance/disable', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*').send({})
  })

server.listen().on('error', err => {
  console.error(err)
})
