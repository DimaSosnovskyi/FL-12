class Employee {
  static base = [];
    constructor ({id,firstName,lastName,birthday,salary,position,departament}) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthday = birthday;
      this.salary = salary;
      this.position = position;
      this.department = departament;
      Employee.base.push(this);
    }
    get age () {
      let input = new Date;
      let birthday = new Date(this.birthday)
      return input.getFullYear() - birthday.getFullYear();
    }
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    quit() {
      delete  Employee.base[this.id];
    }
    retire() {
      console.log('It was such a pleasure to work with you!');
      this.quit();
    }
    getFired() {
      console.log('Not a big deal!');
      this.quit();
    }
    changeDepartment(newDepartment) {
      this.department = newDepartment;
    }
    changePosition(newPosition) {
      this.position = newPosition;
    }
    changeSalary(newSalary) {
      this.salary = newSalary;
    }
    getPromoted(benefits) {
      if (benefits.salary) {
        this.salary += benefits.salary;
        console.log('Yoohooo!')
      } else if (benefits.position) {
        this.position = benefits.position;
        console.log('Yoohooo!')
      } else if (benefits.departament) {
        this.department = benefits.departament;
      }
    }
    getDemoted(punishment) {
      if (punishment.salary) {
        this.salary -= punishment.salary;
        console.log('Damn!')
      } else if (punishment.position) {
        this.position = punishment.position;
        console.log('Damn!')
      } else if (punishment.departament) {
        this.department = punishment.departament;
        console.log('Damn!');
      }
    }
  }
  
  class Manage extends Employee {
    constructor (option) {
      super(option);
      this.position = 'manager';
    }
   get managedEmployees () {
      return Employee.base.filter(emp => emp.departament === this.departament && emp.position !== 'manager');
    }
  }
  class BlueCollarWorker extends Employee {
    
  }
  class HRManager extends Manage {
    constructor(option) {
      super(option);
      this.department = 'Hr';
    }
  }
  class SalesManager extends Manage {
    constructor(option) {
      super(option);
      this.department = 'sales';
    }
  }
const salesManager =  new SalesManager ({
  id: 1,
  firstName: 'john',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000
})
const hrManager = new HRManager ({
  id:2,
  firstName: 'Bob',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000
})
const blueCollarWorkerOne = new BlueCollarWorker ({
  id:3,
  firstName: 'Mary',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000,
  position:'office worker',
  departament: 'sales'
})
const blueCollarWorkerTwo = new BlueCollarWorker ({
  id:4,
  firstName:'Jane',
  lastName:'Doe',
  birthday: '10/04/1994',
  salary: 5000,
  position:'office worker',
  departament: 'hr'
})
console.log(Employee.base);
salesManager.getPromoted({salary:7500});
console.log(blueCollarWorkerTwo.birthday);
console.log(blueCollarWorkerTwo.fullName);
console.log(blueCollarWorkerTwo.age);
console.log(blueCollarWorkerTwo.getFired());

const promoter = (managerPro) => ({
  promote: (index,benefits) => {
    managerPro.managedEmployees.find(emp => emp.id === index).getPromoted({salary:benefits});
  }
})
function managerPro (managerPro) {
  return Object.assign(managerPro,promoter(managerPro));
}


