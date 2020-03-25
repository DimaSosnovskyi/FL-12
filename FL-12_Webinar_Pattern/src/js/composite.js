const root = document.getElementById('root');
const pools = {};
class Pool {
    constructor(performanse,salary,name) {
      this.performanse = performanse;
      this.salary = salary;
      this.name = name;
    }
  }
const composites = arr => {
    const domList = document.createElement('ul');
    domList.className = 'list';
    arr.forEach((emp) => {
      if (emp.rm_id === null) {
        const domEl = document.createElement('li');
        pools[emp.id] = new Pool (emp.performance,emp.salary,emp.name);
        domEl.className = 'list__main';
        domEl.innerText = `${pools[emp.id].name} Pool 0`
        domList.append(domEl);
      } else if (emp.pool_name && emp.rm_id !== null) {
        pools[1][emp.id] = new Pool (emp.performance,emp.salary,emp.name);
        const domEl = document.createElement('li');
        domEl.className = 'list__item';
        domEl.innerText = `${pools[1][emp.id].name} Pool ${emp.id}`;
        domList.append(domEl);
      }
      root.append(domList);
    })
  }

  export { composites }