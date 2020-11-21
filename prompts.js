module.exports = {
    // Asking questions for mainprompt
    mainPrompt : [
        {
            type : 'list',
            name : 'menuAction',
            message: 'What would you like to do?',
            choices :[
                'View All Employees',
                'View All Employees by Department',
                'View All Employees by Manager',
                'View All Roles',
                'View All Departments',               
                'Add Employee',
                'Add Department',
                'Add Role',
                'Update Employee Role',
                'Update Employee Manager',
                'Remove Employee',
                'Exit'
            ]
        }
    ],

    // Questions for adding a department
    addDepartment : [
        {
            type : 'input',
            name : 'deptName',
            message : 'Which department would you like to add?'
        }
    ]
    ,

    // Questions for adding a role
    addRole : [
        {
            type : 'input',
            name : 'roleTitle',
            message : 'What is role title?'
        },
        {
            type : 'input',
            name : 'roleSalary',
            message : 'What is salary of that role?'
        }
    ]
    ,
    
    // Questions for adding an employee
    addEmployee: [
        {
            type: 'input',
            name: 'firstName',
            message: "What is employee's first name?"
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is employee's last name?"
        }
    ]
};