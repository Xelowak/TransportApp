/**
 * Class to represent a vehicle.
 */
class Vehicle {
  /** The VF Number of the vehicle */
  public readonly vfNumber: number;

  /** The brand of the vehicle */
  public readonly brand: string;

  /** The model of the vehicle */
  public readonly model: string;

  /** The number of seats in the vehicle */
  public readonly seats: number;

  /** The registration number of the vehicle */
  public readonly registration: string;

  constructor(obj: Partial<Vehicle>) {
    if (obj === undefined || obj === null) {
      throw new Error('Null or undefined object when creating a Vehicle');
    }

    if (obj.vfNumber === undefined) {
      throw new Error("Undefined 'vfNumber' when creating 'Vehicle'");
    }
    this.vfNumber = obj.vfNumber;

    if (obj.brand === undefined) {
      throw new Error("Undefined 'brand' when creating 'Vehicle'");
    }
    this.brand = obj.brand;

    if (obj.model === undefined) {
      throw new Error("Undefined 'model' when creating 'Vehicle'");
    }
    this.model = obj.model;

    if (obj.seats === undefined) {
      throw new Error("Undefined 'seats' when creating 'Vehicle'");
    }
    this.seats = obj.seats;

    if (obj.registration === undefined) {
      throw new Error("Undefined 'registration' when creating 'Vehicle'");
    }
    this.registration = obj.registration;
  }
}

export default Vehicle;
