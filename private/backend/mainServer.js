import { createServer } from 'node:http';
import mysql from "mysql"
import config from '../config';

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password
})

connection.connect((err)=>{
    if(err) console.log(err)
    
    console.log("DZIALAA");
})

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});