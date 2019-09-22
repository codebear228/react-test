function PubSubDIY() {
    this.handles = {
        eventName: {
            eventsList: []
        }
    }
}

//定义PubSub上的订阅功能
PubSubDIY.prototype.subscribe = function (eventName, callback) {
    let EventsList = [];

    //参数错误，抛出异常
    if (arguments.length < 2) {
        throw new TypeError('arguments error');
    }

    //对应对象上的handles中有对应要订阅的事件
    if (Reflect.has(this.handles, eventName)) {
        EventsList = this.handles[eventName].eventsList;
    } else {
        this.handles[eventName] = {
            eventsList: [callback]
        };
    }
    EventsList.push(callback);
};

//定义PubSub上的发布功能
PubSubDIY.prototype.publish = function (eventName, ...rest) {

    //对应对象上的handles中有已经订阅的事件
    if (this.handles[eventName]) {
        let EventsList = this.handles[eventName].eventsList;
        if (EventsList) {

            //遍历执行订阅的回调函数
            for (let i = 0; i < EventsList.length; i++) {
                EventsList[i].apply(this, rest)
            }
        }
    }
    return this;
};

export default PubSubDIY;