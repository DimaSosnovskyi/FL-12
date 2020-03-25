import './main.css';
import { getMock } from  './js/index.js'
import { composites } from './js/index.js'

const url = 'https://roman4ak.github.io/fe-oop-lab/mocks/epms.json';
const promise = getMock(url);


const getPromise = promise => {
  promise
  .then((response) => {
    return response.json();
  })
  .then((data) =>  {
    composites(data);
  })
}
getPromise(promise);






