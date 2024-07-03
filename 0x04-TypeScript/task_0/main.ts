interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 21,
  location: 'USA',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Foster',
  age: 22,
  location: 'UK',
};

const studentsList: Array<Student> = [student1, student2];
