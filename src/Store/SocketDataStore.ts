import { create } from 'zustand';
import { SensorData } from '../types';

type SocketData = {
  socketData: SensorData[];
  actions: {
    setSocketData: (newData: SensorData[]) => void;
  };
};

export const useSocketDataStore = create<SocketData>((set) => ({
  socketData: [],
  actions: {
    setSocketData: (newData) => set(() => ({ socketData: newData })),
  },
}));
