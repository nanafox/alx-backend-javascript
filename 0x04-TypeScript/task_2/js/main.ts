interface TeacherDirectorCommons {
  workFromHome(): string;
  getCoffeeBreak(): string;
}

interface DirectorInterface extends TeacherDirectorCommons {
  workDirectorTasks(): string;
}

interface TeacherInterface extends TeacherDirectorCommons {
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if ((typeof salary === 'number') && (salary < 500)) {
    return new Teacher
  } else {
    return new Director
  }
}

// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));
