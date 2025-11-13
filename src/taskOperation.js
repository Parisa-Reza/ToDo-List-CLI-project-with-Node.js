const fs = require("fs");
const path = require("path");
const taskFilePath = path.join("./data/tasks.json");

const logger= require("./logger")

// LOADING AND READING FROM tasks.json FILE OPERATION

function loadTask() {
  // checking if tasks.json file exists or not
  if (!fs.existsSync(taskFilePath)) {
    // if the file does not exist, a new file will be created with that very same name
    logger.warn("no such file exists")
    return [];
  }
  // tasks.json file exists or not so now read the file as string format
  else {
    const tasksFileData = fs.readFileSync(taskFilePath, "utf-8");

    //converting string to json
    let taskList = JSON.parse(tasksFileData);
    logger.info(`loaded tasks are ${taskList.length}`)
    return taskList
  }
}



// ADDING TASK OPERATION

function addtask(taskName) {
  // checking if user has mentioned the task name
  if (!taskName) {
    throw new Error("Task name has not been mentioned");
  }
  // user has mentioned the task name

  // loadTask() <-push in to taskList <- (string to object) tasks from tasks.json  if there is any
  let taskList = loadTask(); 
const maxId= Math.max(...taskList.map((item)=>item.id),0)


  const taskDetail = {
    // id: crypto.randomUUID(),
    id: maxId + 1,
    taskName: taskName,
    date: new Date(),
  };


  taskList.push(taskDetail);


  // after adding task to the list now save it in the tasks.json file as string
  savetask(taskList);
 
  // console.log(`added : ${JSON.stringify(taskDetail)}`);
}




// SAVING taskList TO tasks.json OPERATION

// taskList from index.js has been passes as a argument here
function savetask(taskList) {
    if(!Array.isArray)
    {
        throw new Error("taskList must be an array");
        
    }
    // save taskList as string in tasks.json file
  fs.writeFileSync(taskFilePath, JSON.stringify(taskList));
    logger.info(`saved tasks are ${taskList.length}`)
//    console.log("all the tasks are ", taskList);
}



// VIEWING taskList 


function viewtask() {
  const taskList = loadTask();

  logger.info(
    "_______________________________________________________________________________________"
  );

  logger.info(
  taskList
  .map( (task)=> `DATE: [${task.date}] ID : ${task.id}  TASK : ${task.taskName}`)
  .join('\n')




  )


  logger.info(
    "_______________________________________________________________________________________"
  );
}

// DELETING A SPECIFIC TASK FROM taskList

function deletetask(id){
let taskList =loadTask()
logger.warn(`task  ${id}  is going to be deleted` )


taskList= taskList.filter((task)=> parseInt(task.id)!==parseInt(id))

 taskList=taskList.map((task, taskIndex) => {
        return { ...task, id: taskIndex + 1 };
    });
savetask(taskList)
}






// EDITING A SPECIFIC TASK WITH A VERY SPECIFIC ID

function edittask(id,editedTaskName)
{
    if(!id || ! editedTaskName)
    {
         logger.error("Both id and new task name must be provided");
    }
    const taskList= loadTask()
    edittTaskIndex=taskList.findIndex((task)=>
    parseInt(task.id)===parseInt(id)
    )

    taskList[edittTaskIndex].taskName=editedTaskName;
    taskList[edittTaskIndex].date=new Date();
    savetask(taskList)
}




module.exports={
  
    addtask,
    viewtask,
    deletetask,
    edittask
}