import { Channels } from 'main/preload';
import Driver from '../objects/Driver';
import Vehicle from '../objects/Vehicle';

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
      };
      store: {
        get: (key: string) => any;
        set: (key: string, val: any) => void;
        clear: () => void;
        addDriver: (driver: Driver) => void;
        getDrivers: () => Driver[];
        addVehicle: (vehicle: Vehicle) => void;
        getVehicles: () => Vehicle[];
      };
    };
  }
}

export {};
