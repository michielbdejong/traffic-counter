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
  res.end('');
}).listen(process.env.PORT || 8000);
