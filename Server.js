const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router =jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// db.json 조작하기 위한 lowdb 사용
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

// 기본 미들웨어 설정
server.use(middlewares);
server.use(jsonServer.bodyParser);  // body 작성이 필요한 요청에 사용될 미들웨어

/* 여기에 Custom 라우터를 작성 */


// 기본 라우터 작성
server.use(router);

server.listen(5000, () => {
    console.log("JSON Server is running");
})



