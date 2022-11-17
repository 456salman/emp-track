const employee = require('./emloyee')


const managerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'whats the manager name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'whats the manager id'   
    },
    {
        type: 'input',
        name: 'email',
        message: 'whats the manager email'
    },
    {
        type: 'input',
        name: 'officNumber',
        message: 'whats the manager offic number'
    }
]

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'manager'
    }
    getOfficeNumber(){
        return this.officeNumber;
    }

}
module.exports = { manager, managerQ};