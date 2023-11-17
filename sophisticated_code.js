/* 
   filename: sophisticated_code.js
   content: This code demonstrates a sophisticated and elaborate implementation of a task management application.
*/

// Declare a class Task
class Task {
  constructor(title, description, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
  }

  toString() {
    return `${this.title} - ${this.description}, Priority: ${this.priority}, ${this.completed ? 'Completed' : 'Incomplete'}`;
  }
}

// Declare a class TaskManager
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description, priority) {
    const task = new Task(title, description, priority);
    this.tasks.push(task);
  }

  deleteTask(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }

  getTask(index) {
    if (index >= 0 && index < this.tasks.length) {
      return this.tasks[index];
    }
    return null;
  }

  getTasks() {
    return this.tasks;
  }

  toString() {
    let tasksString = '';
    this.tasks.forEach((task, index) => {
      tasksString += `Task ${index + 1}: ${task.toString()}\n`;
    });
    return tasksString;
  }
}

// Create an instance of TaskManager
const taskManager = new TaskManager();

// Add tasks to the task manager
taskManager.addTask('Implement login page', 'Add HTML and CSS for login page', 'High');
taskManager.addTask('Add API integration', 'Integrate with backend APIs', 'Medium');
taskManager.addTask('Implement user profile', 'Create user profile page', 'Low');

// Mark a task as completed
const taskToComplete = taskManager.getTask(0);
if (taskToComplete) {
  taskToComplete.markAsCompleted();
}

// Delete a task
taskManager.deleteTask(1);

// Print tasks in the task manager
console.log(taskManager.toString());

// Output:
// Task 1: Implement login page - Add HTML and CSS for login page, Priority: High, Completed
// Task 2: Implement user profile - Create user profile page, Priority: Low, Incomplete