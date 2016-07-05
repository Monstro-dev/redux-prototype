var koa = require('koa'),
    route = require('koa-route');
    app = koa();

app.use(function *() {
  this.body = 'hello';
}).listen(8080);
