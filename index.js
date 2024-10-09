const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const jsonPayload = require("./user.json");
  res.end(JSON.stringify(jsonPayload));
});

// Server listens on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
