import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import Driver from '../objects/Driver';
import Vehicle from '../objects/Vehicle';

const GET = 'electron-store-get';
const SET = 'electron-store-set';

const DRIVERS_KEY = 'drivers';
const VEHICLES_KEY = 'vehicles';

export type Channels = 'ipc-example';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => ipcRenderer.removeListener(channel, subscription);
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
  store: {
    get(val: any) {
      return ipcRenderer.sendSync(GET, val);
    },
    set(property: any, val: any) {
      ipcRenderer.send(SET, property, val);
    },
    clear() {
      ipcRenderer.send(SET, DRIVERS_KEY, []);
      ipcRenderer.send(SET, VEHICLES_KEY, []);
    },
    addDriver(driver: Driver) {
      const drivers = ipcRenderer.sendSync(GET, DRIVERS_KEY) as
        | Driver[]
        | undefined;
      if (!drivers) {
        ipcRenderer.send(SET, DRIVERS_KEY, [driver]);
      } else {
        drivers.push(driver);
        ipcRenderer.send(SET, DRIVERS_KEY, drivers);
      }
    },
    getDrivers() {
      return ipcRenderer.sendSync(GET, DRIVERS_KEY) as Driver[] | undefined;
    },
    addVehicle(vehicle: Vehicle) {
      const vehicles = ipcRenderer.sendSync(GET, VEHICLES_KEY) as
        | Vehicle[]
        | undefined;
      if (!vehicles) {
        ipcRenderer.send(SET, VEHICLES_KEY, [vehicle]);
      } else {
        vehicles.push(vehicle);
        ipcRenderer.send(SET, DRIVERS_KEY, vehicles);
      }
    },
    getVehicles() {
      return ipcRenderer.sendSync(GET, VEHICLES_KEY) as Vehicle[] | undefined;
    },
  },
});
