var events=require('events')
var eventEmitter=new events.EventEmitter()

var mEventHandler=function()
{
    
}
eventEmitter.on('scream',mEventHandler)

eventEmitter.emit('scream')
