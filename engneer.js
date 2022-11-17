const employee = require('./emloyee')


const engneerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'whats the engneer name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'whats the engneer id'   
    },
    {
        type: 'input',
        name: 'email',
        message: 'whats the engneer email'
    },
    {
        type: 'input',
        name: 'github',
        message: 'whats the engneer github'
    }
]

class engneer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole(){
        return 'engneer'
    }
    getGithub(){
        return this.github;
    }

}
module.exports = { engneer, engneerQ};