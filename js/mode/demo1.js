//发布-订阅
class PubSub {
  constructor() {
    this.subscribers = [];
  }

  //订阅事件
  subscribe(topic, callback) {
    let callbacks = this.subscribers[topic];
    if (!callbacks) {
      this.subscribers[topic] = [callback];
    } else {
      callbacks.push(callback);
    }
  }
  //发布事件
  publish(topic, ...args) {
    let callbacks = this.subscribers[topic] || [];
    callbacks.forEach(callback => callback(...args));
  }
}

let pubSub = new PubSub();

//订阅事件
pubSub.subscribe("JS", console.log);
pubSub.subscribe("JS", console.log);

//发布事件
pubSub.publish("JS", "I publish `JS` envent");
