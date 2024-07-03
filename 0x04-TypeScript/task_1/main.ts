/**
 * Defines the structure of a Teacher interface with specific properties and
 * optional additional properties.
 *
 * @interface Teacher
 * @property {string} firstName - The first name of the teacher.
 * @property {string} lastName - The last name of the teacher.
 * @property {boolean} fullTimeEmployee - Indicates if the teacher is a
 * full-time employee.
 * @property {number} [yearsOfExperience] - The years of experience of the teacher (optional).
 * @property {string} location - The location of the teacher.
 * @property {any} [propName] - Additional properties that can be of any type.
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}
