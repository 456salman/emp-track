const employee = require('./emloyee')


const engineerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'whats the engineer name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'whats the engineer id'   
    },
    {
        type: 'input',
        name: 'email',
        message: 'whats the engineer email'
    },
    {
        type: 'input',
        name: 'github',
        message: 'whats the engineer github'
    }
]

class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole(){
        return 'engineer'
    }
    getGithub(){
        return this.github;
    }

}
module.exports = { engineer, engineerQ};