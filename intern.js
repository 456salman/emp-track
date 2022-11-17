const employee = require('./emloyee')


const internQ = [
    {
        type: 'input',
        name: 'name',
        message: 'whats the intern name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'whats the intern id'   
    },
    {
        type: 'input',
        name: 'email',
        message: 'whats the intern email'
    },
    {
        type: 'input',
        name: 'school',
        message: 'whats the intern school'
    }
]

class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole(){
        return 'intern'
    }
    getSchool(){
        return this.school;
    }

}
module.exports = { intern, internQ};