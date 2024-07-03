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

/**
 * Defines the structure of a Directors interface that extends the Teacher
 * interface with additional properties.
 *
 * @interface Directors
 * @extends {Teacher}
 * @property {number} numberOfReports - The number of reports of the director.
 */
interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Defines a function that prints the full name of a teacher.
 *
 * @param {string} firstName - The first name of the teacher.
 * @param {string} lastName - The last name of the teacher.
 * @returns {string} The full name of the teacher.
 */
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
