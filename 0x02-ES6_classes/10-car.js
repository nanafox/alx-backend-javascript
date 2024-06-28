const validators = {
  validateObjValue: (varName, obj, expectedType) => {
    // eslint-disable-next-line valid-typeof
    if (typeof obj !== expectedType) {
      throw new TypeError(`${varName} must be a ${expectedType}`);
    }
  },
};

/**
 * Represents a Car.
 * @class
 */
export default class Car {
  /**
   * Create a Car.
   * @constructor
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor of the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Get the brand of the car.
   * @type {string}
   */
  get brand() {
    return this._brand;
  }

  /**
   * Get the motor of the car.
   * @type {string}
   */
  get motor() {
    return this._motor;
  }

  /**
   * Get the color of the car.
   * @type {string}
   */
  get color() {
    return this._color;
  }

  /**
   * Set the brand of the car.
   * @param {string} value - The brand of the car.
   */
  set brand(value) {
    validators.validateBrand('brand', value, 'string');
    this._brand = value;
  }

  /**
   * Set the motor of the car.
   * @param {string} value - The motor of the car.
   */
  set motor(value) {
    validators.validateBrand('motor', value, 'string');
    this._motor = value;
  }

  /**
   * Set the color of the car.
   * @param {string} value - The color of the car.
   */
  set color(value) {
    validators.validateBrand('color', value, 'string');
    this._color = value;
  }

  /**
   * Create a clone of the car.
   * @returns {Car} - The cloned car.
   */
  cloneCar() {
    return new this.constructor();
  }
}
