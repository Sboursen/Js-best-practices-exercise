export default class LocalStorage {
  constructor() {
    this.toDoTasks = [];
  }

  initializeLocalStorage = () => {
    if (!localStorage.getItem('toDoTasks')) {
      this.toDoTasks = [];
      localStorage.setItem(
        'toDoTasks',
        JSON.stringify(this.toDoTasks),
      );
    } else {
      this.toDoTasks = JSON.parse(
        localStorage.getItem('toDoTasks'),
      );
    }
  };

  resetIndices = (modifiedToDoTasks) =>
    modifiedToDoTasks.map((task, order) => {
      task.index = order;
      return task;
    });

  saveToLocalStorage = () =>
    localStorage.setItem(
      'toDoTasks',
      JSON.stringify(this.toDoTasks),
    );

  updateLocalStorage = (toDoTasks) => {
    this.toDoTasks = toDoTasks;
    this.saveToLocalStorage();
  };

  addToLocalStorage = (task) => {
    this.toDoTasks.push(task);
    this.saveToLocalStorage();
  };

  changeTaskStatus = (task, status) => {
    this.toDoTasks[task.index].completed = status;
    this.saveToLocalStorage();
  };

  changeTaskDescription = (task, description) => {
    this.toDoTasks[task.index].description = description;
    this.saveToLocalStorage();
  };

  readLocalStorage = () => {
    this.toDoTasks = JSON.parse(
      localStorage.getItem('toDoTasks'),
    );
    return this.toDoTasks;
  };
}
