import { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState('');
  const [todo, setTodo] = useState('');

  const capitalize = value => `${value[0].toUpperCase()}${value.slice(1)}`;
  const getDate = date => `${date.split(' ')[1]} ${date.split(' ')[2]} `;

  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await axios.get('/getTodos');
        setTodos(res.data.todos);
      } catch (err) {
        console.log(`${err.message}\n${err.response.data.message}`);
      }
    }

    fetchTodos();
  });

  const deleteTodo = async todoId => {
    try {
      const res = await axios.delete(`/deleteTodo/${todoId}`);
      console.log(res.data);

      if (todoId === todo._id) {
        setTodo('');
      }
    } catch (err) {
      console.log(`${err.message}\n${err.response.data.message}`);
    }
  };

  return (
    <>
      {todos.length ? (
        <>
          <h1 className="text-3xl text-center">All Todos</h1>

          <table className="mt-8 mb-16 mx-auto w-2/3">
            <thead className="bg-[#f6f6f6]">
              <tr className="border">
                <th className="px-6 py-2 text-left font-medium">Title</th>
                <th className="px-6 py-2 text-left font-medium">Date</th>
                <th className="px-6 py-2 text-left font-medium">Tasks</th>
                <th className="px-6 py-2 text-left font-medium">View</th>
                <th className="px-6 py-2 text-left font-medium">Delete</th>
              </tr>
            </thead>

            <tbody>
              {todos.map(todo => (
                <tr className="border">
                  <td className="px-6 py-2.5">{capitalize(todo.title)}</td>
                  <td className="px-6 py-2.5">{getDate(todo.date)}</td>
                  <td className="px-6 py-2.5">{todo.tasks.length}</td>
                  <td className="px-6 py-2.5">
                    <button className="text-yellow-500" onClick={() => setTodo(todo)}>
                      View
                    </button>
                  </td>
                  <td className="px-6 py-2.5">
                    <button className="text-red-500" onClick={() => deleteTodo(todo._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        ''
      )}

      <Todo todo={todo} setTodo={setTodo} capitalize={capitalize} />
    </>
  );
}

export default TodoList;
