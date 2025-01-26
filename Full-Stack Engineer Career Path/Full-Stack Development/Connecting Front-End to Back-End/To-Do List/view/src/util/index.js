export const createTodo = async (todo) => {
  const response = await fetch('/todo/create', {
    method: 'POST',
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const getTodos = async () => {
  const response = await fetch('/todos');
  return response.json();
};

export const removeTodo = async (id) => {
  const response = await fetch(`/todo/${id}`, { method: 'DELETE' });
  return response.json();
};
