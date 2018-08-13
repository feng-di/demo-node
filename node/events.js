const EventEmitter = require('node/events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

// Add event listener
myEmitter.on('event', () => {
  console.log('an event occurred!')
})

myEmitter.on('event_async', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously')
  })
})

// Used to trigger event
myEmitter.emit('event')
myEmitter.emit('event_async', 'a', 'b')

const myEmitter1 = new MyEmitter()
let m = 0
myEmitter1.once('event1', () => {
  console.log(++m)
})
myEmitter1.emit('event1')
// Prints: 1
myEmitter1.emit('event1')
