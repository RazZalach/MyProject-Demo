const http=require('http');
const app=require('./app');
const server=http.createServer(app);
const port=process.env.PORT || 5656 ;
server.listen(port,()=>{
console.log('server on air');
});