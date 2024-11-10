const http=require('http')
const express=require('express')
const path=require('path')
const app=express()
const server=http.createServer(app)
const {Server}=require('socket.io')
const { Socket } = require('dgram')
const io=new Server(server)

//socket.io
io.on('connection',Socket=>{
   Socket.on('user-message',(msg)=>{
    io.emit('message',msg)
   })
    
})


app.use(express.static(path.resolve('./public')))


app.get('/',(req,res)=>{
    res.sendFile('/index.html')
})
server.listen(3000,()=>{
    console.log(`server running on port:3000`);
    
})