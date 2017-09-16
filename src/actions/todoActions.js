export const TODO_ADDED = 'todoAdded';

export const addTodo = (todo) => ({
  type: TODO_ADDED,
  todo
});
