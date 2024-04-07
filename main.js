#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magenta.bold("\n \t welcome to codewithMahnoor - Todo-List Application\n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do:",
                choices: ["Add Task", "Delete Task", "update task", "veiw Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "update task") {
            await updateTask();
        }
        else if (option.choice === "veiw Todo-List") {
            await veiwTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// function to add new task to the list
let addTask = async () => {
    let newtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todoList.push(newtask.task);
    console.log(`\n ${newtask.task} task added successfully in Todo-List`);
};
// function to veiw all Todo-List Tasks
let veiwTask = () => {
    console.log("\n your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// function to delete a task from the list
let deleteTask = async () => {
    await veiwTask();
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index on.' of the task you want to delete :",
        }
    ]);
    let deletedTask = todoList.splice(taskindex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been deleted successfully from your Todo-List\n`);
};
//function to update a task
let updateTask = async () => {
    await veiwTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [for updated list check option: "veiw Todo_list"]`);
};
main();
