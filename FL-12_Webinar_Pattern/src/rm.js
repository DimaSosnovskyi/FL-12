import './main.css';
import { getMock } from  './js/index.js'

const url = 'https://roman4ak.github.io/fe-oop-lab/mocks/epms.json';
const employeesList = [];
getMock(url,(data) => {
  employeesList.push(data);
});
console.log(employeesList);

const pools = {}
const employees = {}
class Employees {
  constructor(id,rm_id,name,performanse,last_vacation_date) {
    this.id = id;
    this.rm_id = rm_id;
    this.name = name;
    this.performanse = performanse;
    this.last_vacation_date = last_vacation_date;
  }
}
class Pool {
  constructor(performanse,salary) {
    this.performanse = performanse;
    this.salary = salary;
  }
}


const composites = arr => {
  arr.forEach((emp) => {
    if (emp.pool_name === 'Top pool' ||
        emp.pool_name === 'Oscar' ||
        emp.pool_name === 'Kilo' ||
        emp.pool_name === 'Echo' ||
        emp.pool_name === 'Quebec' ||
        emp.pool_name === 'Romeo' ||
        emp.pool_name === 'Alfa'
    ) {
      pools.emp.name = new Pool(emp.performanse,emp.salary);
    }
  })
}
composites(employeesList);

