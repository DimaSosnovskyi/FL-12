
export class CoursesService {
    constructor() {
        this.array = [];
        this.setMocks();
    }
    setMocks () {
        this.array = [
            {id:1,name: 'prerequisites', time: '18.02.18',description: 'Webpack,Angular,TypeScript',estimate: '1h 34 min'},
            {id:2,name: 'components', time: '01.02.18',description: 'Components,lifecicle,tempalate DSL and data-binding.Customs components',estimate: '1h 34 min'},
            {id:3,name: 'Directives + Pipes', time: '15.01.18',description: 'Directives,type of directives,buit-in-directives,custom directive,pipes,built-in-pipes,custom pipes,async pipes',estimate: '1h 34 min'},
            {id:4,name: 'Changes detection', time: '29.11.17',description: 'Zone js,flow,immutable data structure,push strategy',estimate: '1h 34 min'},
            {id:5,name: 'Routing', time: '03.10.17',description: 'Routing, lazy and prerouting,CanActive,CanDeative',estimate: '1h 34 min'}
          ]
    }
    getCourses() {
        return this.array;
    }
}

export const courseService = new CoursesService();