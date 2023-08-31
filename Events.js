var events=require('events')
var eventEmitter=new events.EventEmitter()

var mEventHandler=function()
{
    console.log('I hear a scream')
}
eventEmitter.on('scream',mEventHandler)

eventEmitter.emit('scream')