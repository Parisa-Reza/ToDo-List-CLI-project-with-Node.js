
# To-Do List CLI Project

A simple **Command-Line To-Do List Application** built with Node.js. This project allows users to **add, view, edit and delete tasks** directly from the terminal.

---

## Demo Video

Watch the demo video here:  
https://www.dropbox.com/scl/fi/tmqrx8hd5q40jqn1ixaw3/todo-list-cli-with-node-js.mp4?rlkey=2n8ljwixqum88bkfl0f965i6l&st=tzz2iu3n&dl=0

---

##  Requirements

This project requires Node.js and npm. Please make sure you have the following installed:

| Tool | Version |
|------|---------|
| Node.js | v20.19.5 |
| npm     | 10.8.2  |
| nvm  | 0.40.3 |

For installing Node.js visit the official site :

>  https://nodejs.org/en/download

---

## Required Packages

This project uses the following npm package:

| Package | Version |
|---------|---------|
| chalk   | ^4.1.2  |

Install dependencies using:

```bash
npm install
````

---

##  Usage

Open your terminal and navigate to the project directory. Use the following commands:

| Command                                   | Description             | Example                        |
| ----------------------------------------- | ----------------------- | ------------------------------ |
| `npm start add <"taskName">`              | Add a new task          | `npm start add "Buy milk"`     |
| `npm start view`                          | View all tasks          | `npm start view`               |
| `npm start delete <taskId>`               | Delete a task by its ID | `npm start delete 2`           |
| `npm start edit <taskId> <"newTaskName">` | Edit a task by its ID   | `npm start edit 2 "Buy bread"` |

> Tip: Make sure to keep the quotes around task names that have spaces.

---

## Features

* Add tasks with a single command.
* View all tasks in a neat list with ID and date.
* Edit any task by ID.
* Delete any task by ID.
* Colorful terminal output using **Chalk**.

---


Happy Coding <3
