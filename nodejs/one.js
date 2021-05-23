 
console.log("i am vine")

var http = require('http')

http.createServer(
function (req,res){
    console.log(req.url)
    res.writeHead(200,{'content-type':
    "text/html;charset= 'utf8' "})
    //not sensitive upper
    res.end('you are vine')
}  
).listen(8081)

console.log('8081')