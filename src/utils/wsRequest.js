import { url } from 'src/config';

const wsURL = url.websocketUri;

export default function soket(arg, onmessage, err, reconnect) {
    const socket = 'WebSocket' in window ? new window.WebSocket(wsURL) : new window.MozWebSocket(wsURL);
    let interval = null;
    const reconnecTime = 180000; // 当连接断开，重新连接的时间
    let times = 120 // 当连接断开，最多重新连接120次
    const heartCheckTime = 30000; // 心跳间隔时间
    const reconnectTime = 180000; 

    // 发送心跳
    const heartCheck = {
        timeout: heartCheckTime,
        timeoutObj: null,
        start() {
            if (this.timeoutObj) {
                clearTimeout(this.timeoutObj)
            }
            this.timeoutObj = setTimeout((() => {
                if (socket && socket.readyState == 1) {
                  socket.send(JSON.stringify({ method: 'server.ping', params: [], id: 0 }))
                }
            }, this.timeout))
        },
        reset() {
            clearTimeout(this.timeoutObj)
            this.start()
        }
    }

    // 连接成功
    socket.onopen = () => {
        heartCheck.start();
        if (Array.isArray(arg)) {
          arg.map(item => socket.send(JSON.stringify(item)));
        } else if (Object.prototype.toString(arg) === '[object Object]') {
          socket.send(JSON.stringify(arg));
        } else {
          console.error('arg shold be a object or array', arg);
        }
    }

    // 获取数据
    socket.onmessage = (e) => {
        heartCheck.start();
        const eData = JSON.parse(e.data);
        if (interval) clearInterval(interval)
        onmessage(eData);
        times = 120
    };

    // 连接失败
    socket.onerror = e => error && error(JSON.parse(e.data));

    // 关闭事件
    socket.onclose = () => {
        console.log('closed')
        interval = setInterval(() => {
            if (reconnect) {
              reconnect()
            }
            times -= 1
            if (times < 0) {
              clearInterval(interval)
            }
        }, reconnectTime)
    }

    return socket
}