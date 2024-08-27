let ws;

export const connectToWebSocket = (callbacks) => {
  if (ws) {
    return ws;
  }

  ws = new WebSocket('ws://localhost:5000'); // Replace with your WebSocket server URL

  ws.onmessage = (event) => {
    if (callbacks.onMessage) {
      callbacks.onMessage(event);
    }
  };

  ws.onopen = () => {
    console.log('WebSocket connection established');
  };

  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  ws.onclose = () => {
    console.log('WebSocket connection closed');
  };

  return ws;
};
