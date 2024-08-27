const http = require('http');
const app = require('./app');
const setupWebSocket = require('./ws/websocket');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
setupWebSocket(server);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
