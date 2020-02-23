class Employee {
    constructor (id,firstName,lastName,birthday,salary,position,departament) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthday = birthday;
      this.salary = salary;
      this.position = position;
      this.department = departament;
      Employee.age;
      Employee.fullName = `${this.firstName} ${this.lastName}`;
      Employee.base.push({id:this.id,
        firstName: this.firstName,
        lastName:this.lastName,
        birthday:this.birthday,
        salary: this.salary,
        position:this.position,
        departament: this.department
      });
    }
    get age () {
      return Employee.age;
    }
    get fullName() {
      return Employee.fullName;
    }
    static quit(id) {
      delete Employee.base[id];
    }
    static retire(id) {
      console.log('It was such a pleasure to work with you!');
      this.quit(id);
    }
    static getFired(id) {
      console.log('Not a big deal!');
      this.quit(id);
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
  }
  Employee.age;
  Employee.fullName;
  Employee.base = [];
  
  class Manage extends Employee {
    constructor (id,firstName,lastName,birthday,salary,position,departament) {
      super(id,firstName,lastName,birthday,salary,position,departament);
      this.position = 'manager';
    }
  }
  class BlueCollarWorker extends Employee {
    constructor (id,firstName,lastName,birthday,salary,position,departament) {
      super(id,firstName,lastName,birthday,salary,position,departament);
    }
  }
  class HRManager extends Manage {
    constructor(id,firstName,lastName,birthday,salary,position,departament) {
      super(id,firstName,lastName,birthday,salary,position,departament);
      this.department = 'Hr';
    }
  }
  class SalesManager extends Manage {
    constructor(id,firstName,lastName,birthday,salary,position,departament) {
      super(id,firstName,lastName,birthday,salary,position,departament);
      this.department = 'sales';
    }
  }
  var sales = new SalesManager(0,'Dima','Sosnovskyi','11.10.1995','250$');
  var hr = new HRManager(0,'Dima','Sosnovskyi','11.10.1995','250$');
  var subBar = new Manage(0,'Dima','Sosnovskyi','11.10.1995','250$','','frontend');
  
  var bar = new Employee (0,'Dima','Sosnovskyi','11.10.1995','250$','traenny','frontend');
  
  var bar1 = new Employee (1,'Dima','Sosnovskyi','11.10.1995','250$','traenny','frontend');
  
  var bar2 = new Employee (2,'Dima','Sosnovskyi','11.10.1995','250$','traenny','frontend');