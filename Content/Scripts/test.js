// const mqtt = require('mqtt')

/***
 * 浏览器环境
 * 使用协议为 ws 和 wss 的 MQTT over WebSocket 连接
 * EMQX 的 ws 连接默认端口为 8083，wss 为 8084
 * 注意需要在连接地址后加上一个 path, 例如 /mqtt
 */
const url = 'ws://broker.emqx.io:8083/mqtt'
/***
 * Node.js 环境
 * 使用协议为 mqtt 和 mqtts 的 MQTT over TCP 连接
 * EMQX 的 mqtt 连接默认端口为 1883，mqtts 为 8084
 */
// const url = 'mqtt://broker.emqx.io:1883'

// 创建客户端实例
const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // 认证信息
  clientId: 'emqx_test',
  username: 'emqx_test',
  password: 'emqx_test',
}
ue4("mqtt", "/mqtt")
const client = mqtt.connect(url, options)
client.on('connect', function () {
  console.log('Connected')
  // 订阅主题
  client.publish('/nodejs/mqtt', 'Hello mqtt')
  client.subscribe('/nodejs/mqtt', function (err) {
    if (!err) {
      // 发布消息
      client.publish('/nodejs/mqtt', 'Hello mqtt')
    }
  })
})

// 接收消息
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
//   client.end()
})
