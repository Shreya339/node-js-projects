import http from 'http';
import apiData from './api-data.js';
const api_Data = new apiData();

http.createServer((req,res)=> {
    res.writeHead(200,'OK',{'Content-Type':'application\json'});
    res.write(JSON.stringify(api_Data.data));
    res.end();
}).listen(5000);