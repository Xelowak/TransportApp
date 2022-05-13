export enum DayParts {
  DAY = 'day', // 7 am to 3 pm
  EVENING = 'evening', // 3 am to 11 pm
  NIGHT = 'night', // 11 pm to 7 am
}

type Availability = Map<Date, DayParts[]>;

/**
 * Class to represent a Driver
 */
class Driver {
  /** The name (first and last names) of the driver */
  public readonly name: string;

  /** The address of the driver */
  public readonly address: string;

  /** The email address of the driver */
  public readonly email: string;

  /** Boolean indicating if the driver is accredited */
  public readonly isAccredited: boolean;

  /** Boolean indicating if the driver has the parking card */
  public readonly hasParkingCard: boolean;

  /** The availability of the driver */
  public readonly availability: Availability;

  constructor(obj: Partial<Driver>) {
    if (obj === undefined || obj === null) {
      throw new Error('Null or undefined object when creating a Driver');
    }

    if (obj.name === undefined) {
      throw new Error("Undefined 'name' when creating Driver");
    }
    this.name = obj.name;

    if (obj.address === undefined) {
      throw new Error("Undefined 'address' when creating Driver");
    }
    this.address = obj.address;

    if (obj.email === undefined) {
      throw new Error("Undefined 'email' when creating Driver");
    }
    this.email = obj.email;

    if (obj.isAccredited === undefined) {
      throw new Error("Undefined 'isAccredited' when creating Driver");
    }
    this.isAccredited = obj.isAccredited;

    if (obj.hasParkingCard === undefined) {
      throw new Error("Undefined 'hasParkingCard' when creating Driver");
    }
    this.hasParkingCard = obj.hasParkingCard;

    if (obj.availability === undefined) {
      throw new Error("Undefined 'availability' when creating Driver");
    }
    this.availability = obj.availability;
  }
}

export default Driver;
