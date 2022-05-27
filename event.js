const EventEmitter = require('events');
const { v4 } = require('uuid');
const uuid = require('uuid');
class MyEmitter extends EventEmitter {
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg });
    }
}
module.exports = MyEmitter;
// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => console.log('Mahad'));
// myEmitter.on('event', () => console.log('Mahad Bin Naeem'));
// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');