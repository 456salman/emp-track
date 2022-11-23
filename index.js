const inquirer = require('inquirer')
const build = require('./pageT')
const writeFile = require('./writeF')

const {engineer, engineerQ } = require('./engineer')
const {manager, managerQ} = require('./manager')
const {intern, internQ} = require('./intern')
// const build = require('./pageT')

const employeeA = []

const init = () => {managerQe () }

const managerQe = () => {inquirer.prompt(managerQ).then((answers) => {
answers = new manager(answers.name, answers.id, answers.email, answers.officeNumber) 
employeeA.push(answers);
 return employeePrompt()

    })
}




const engineerQe = () => {inquirer.prompt(engineerQ).then((answers) => {
answers = new engineer(answers.name, answers.id, answers.email, answers.github) 
employeeA.push(answers);
 return employeePrompt()

    })
}


const internQe = () => {inquirer.prompt(internQ).then((answers) => {
answers = new intern(answers.name, answers.id, answers.email, answers.school) 
employeeA.push(answers);
 return employeePrompt()

    })
}


const employeePrompt = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: "What kind of team member would you like to add?",
        choices: [
            {name: 'Intern', value: "addIntern"},
            {name: 'Engineer', value: "addEngineer"},
            {name: 'DONE', value: "done"}
        ]
    }])
    .then( answer => {
        if (answer.employeeType === 'addEngineer') { engineerQe(); };
        if (answer.employeeType === 'addIntern') { internQe(); };
        if (answer.employeeType === 'done') {
            let html = build(employeeA)
            console.log('...');
            writeFile(html);
        }
    })
}







init();