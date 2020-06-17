const http = require('http');
const counts = {};
setInterval(() => {
  console.log(counts);
}, 60000);

http.createServer((req, res) => {
  if (typeof counts[req.url] === 'undefined') {
    counts[req.url] = 0;
  }
  counts[req.url]++;
  res.writeHead(200, {
   'Content-Type': 'image/svg+xml'
  });
  res.end('<svg xmlns="http://www.w3.org/2000/svg" />');
}).listen(process.env.PORT || 8000);
