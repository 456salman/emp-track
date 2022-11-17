const inquirer = require('inquirer')
const build = require('./pageT')
const writeFile = require('./writeF')

const {engneer, engneerQ } = require('./engneer')
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




const engneerQe = () => {inquirer.prompt(engneerQ).then((answers) => {
answers = new engneer(answers.name, answers.id, answers.email, answers.github) 
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
            {name: 'Engneer', value: "addEngneer"},
            {name: 'DONE', value: "done"}
        ]
    }])
    .then( answer => {
        if (answer.employeeType === 'addEngneer') { engneerQe(); };
        if (answer.employeeType === 'addIntern') { internQe(); };
        if (answer.employeeType === 'done') {
            let html = build(employeeA)
            console.log('...');
            writeFile(html);
        }
    })
}







init();