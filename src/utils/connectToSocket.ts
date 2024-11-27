import { Dispatch } from 'react';
import { SensorData, WSConfig } from '../types';

export const connectToSocket = (
  setSocketData: Dispatch<SensorData[]>,
  { MAX_ATTEMPT_CONNECTIONS, connectionAttempts }: WSConfig
) => {
  const ws = new WebSocket(import.meta.env.VITE_SOCKETS_URL);

  ws.onmessage = (event) => {
    const receivedData: SensorData[] = JSON.parse(event.data);
    setSocketData(receivedData);

    console.log(receivedData);
  };

  ws.onerror = (error) => {
    console.log('WebSocket Error:', error);
    if (MAX_ATTEMPT_CONNECTIONS < connectionAttempts) return;

    setTimeout(() => {
      connectToSocket(setSocketData, {
        MAX_ATTEMPT_CONNECTIONS: 10,
        connectionAttempts: connectionAttempts + 1,
      });
    }, 1000);
  };

  ws.onclose = () => {
    console.log('WebSocket connection closed');
  };

  return ws;
};
