//========================== USER COMMANDS AND ARGUMENTS:=================================

// node index.js add <taskName>      -> Add a new task (e.g., node index.js add "Buy milk")
// node index.js view                -> View all tasks
// node index.js delete <taskId>     -> Delete a task by its id (e.g., node index.js delete 2)
// node index.js edit <taskId> <newTaskName> -> Edit a task by its id (e.g., node index.js edit 2 "Buy bread")



// fetching functions from taskOperation.js file
const {addtask,viewtask, deletetask,edittask}=require("./taskOperation")



const command = process.argv[2]; //add operation
const value = process.argv[3]; // task name




//TASK OPERATIONs


if (command === "add") {
  addtask(value);
}
else if (command === "view") 
{
    viewtask();
}
else if (command=== "delete")
{
    deletetask(value)
}
else if (command=== "edit")
{
    edittask(value,value)
}




