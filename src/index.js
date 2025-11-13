//========================== user commands in the terminal:=================================

// npm start add <"taskName">      -> Add a new task (e.g., node index.js add "Buy milk")
// npm start view                  -> View all tasks
// npm start delete <taskId>       -> Delete a task by its id (e.g., node index.js delete 2)
// npm start edit <taskId> <"newTaskName"> -> Edit a task by its id (e.g., node index.js edit 2 "Buy bread")



// fetching functions from taskOperation.js file
const {addtask,viewtask, deletetask,edittask}=require("./taskOperation")
const logger= require("./logger")

logger.info("RUNNING TODO CLI APP")

const command = process.argv[2]; // command like add, view, delete, edit

if (!command) {
  logger.error("No command provided! Use add, view, delete, or edit.");
  process.exit(1); //Stops immediately on error

}

// TASK OPERATIONS

if (command === "add") {
    const taskName = process.argv.slice(3).join(" ");   //Index 3 is the first argument after the command (add), each word of thh task name is treated as list element ,joined with space
  if (!taskName) {
    logger.error("Please provide a task name to add.");
    process.exit(1);
  }
  addtask(taskName);
} 
else if (command === "view") {
  viewtask();
} 
else if (command === "delete") {
  const taskId = process.argv[3];
  if (!taskId) {
    logger.error("Please provide the task ID to delete.");
    process.exit(1);
  }
  deletetask(taskId);
} 
else if (command === "edit") {
  const taskId = process.argv[3];
  const editedTaskName = process.argv.slice(4).join(" "); 
  if (!taskId || !editedTaskName) {
    logger.error("Please provide both task ID and new task name to edit.");
    process.exit(1);
  }
  edittask(taskId, editedTaskName);
} 


