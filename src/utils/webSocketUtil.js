import { url } from 'src/config';

const wsURL = url.websocketUri;

class WebSocketUtil{

    constructor(params, onMessage, onError){

        this.params = params;
        this.onMessage = onMessage;
        this.onError = onError;

        this.webSocket = null;
        this.keepAliveInterval = null;
    }

    // 连接方法
    connect(){
        this.webSocket = 'WebSocket' in window ? new window.WebSocket(wsURL) : new window.MozWebSocket(wsURL);
        var that = this;
        this.webSocket.onopen = () => {

            if (Array.isArray(this.params)) {

                that.params.map(item => that.webSocket.send(JSON.stringify(item)));
              } else if (Object.prototype.toString(that.params) === '[object Object]') {

                that.webSocket.send(JSON.stringify(that.params));
              } else {

                console.error('arg shold be a object or array', that.params);
              }
        }

        // 收到数据, 回调闭包
        this.webSocket.onmessage = (e) => {

            const eData = JSON.parse(e.data);
            that.onMessage(eData);
        }

        // 出错, 回调出错闭包
        this.webSocket.onerror = (e) => {

            if (error){

                that.onError(JSON.parse(e.data));
            }
        }
    }

    // 发送心跳数据
    sendHeartbeat(){

        const params = JSON.stringify({ method: 'server.ping', params: [], id: 0 });
        this.sendData(params);
    }

    // 发送数据
    sendData(data){

        if (this.webSocket && this.webSocket.readyState == 1){

            this.webSocket.send(data);
        }
    }

    // 开启Interval
    startKeepAliveInterval(){

        if (this.keepAliveInterval){

            clearInterval(this.keepAliveInterval);
        }

        var that = this;
        this.keepAliveInterval = setInterval(() => {
        
            if (that.webSocket && that.webSocket.readyState == 1){
    
                that.sendHeartbeat();
            }else{
    
                that.clean();
                that.connect();
            }
          }, 30000);
    }

    // 清空方法
    clean(){

        if (this.webSocket){
            this.webSocket.close()
            this.webSocket.onmessage = null
            this.webSocket.onerror = null
            this.webSocket = null
        }
    }

    // 销毁方法
    destroy(){

        console.log('destroy')
        if (this.keepAliveInterval){

            clearInterval(this.keepAliveInterval);
        }

        this.clean();
    }
}

export default function (params, onmessage, error, reconnect){

    // 创建WebSocket并开始连接
    const webSocket = new WebSocketUtil(params, onmessage, error);
    webSocket.connect();

    // 启动定时器 30S检查一次webSocket对象状态, 若正常连接则发送心跳, 否则clean后重新connect
    webSocket.startKeepAliveInterval();

    return webSocket;
}