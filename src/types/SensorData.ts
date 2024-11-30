export type SensorData = {
  timestamp: string;
  node_x: string;
  node_y: string;
  temperature: number;
  humidity: number;
  oxygen: number;
  CO2: number;
  fire: number;
};

export type WSConfig = {
  MAX_ATTEMPT_CONNECTIONS: number;
  connectionAttempts: number;
};
