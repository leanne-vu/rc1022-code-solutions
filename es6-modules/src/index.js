import { TodoApp } from './components/todo-app';

export const container = document.querySelector('#app');

export const nextId = 4;

export const todos = [
  {
    id: 1,
    task: 'Learn to code.',
    isCompleted: false
  },
  {
    id: 2,
    task: 'Build projects.',
    isCompleted: false
  },
  {
    id: 3,
    task: 'Get a job.',
    isCompleted: false
  }
];

export const app = new TodoApp(container, nextId, todos, newState => {
  console.log(newState);
});

app.start();
