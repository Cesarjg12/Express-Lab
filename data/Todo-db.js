const todos = [
    {task: 'Wake up', done: true},
    {task: 'Feed pets', done: false},
    {task: 'Eat breakfast', done: false},
    {task: 'Get ready', done: false},
    {task: 'Attend Class', done: false}
  ];




  module.exports = {
    getAll: function () {
        return todos
    }
  }