import axios from 'axios';

function Todo({ todo, setTodo, capitalize }) {
  const editTitle = async todoId => {
    try {
      const newTitle = prompt('Enter new title for your todo');
      const res = await axios.put(`/editTitle/${todoId}`, { newTitle });
      setTodo(res.data.todo);
      console.log(res.data);
    } catch (err) {
      console.log(`${err.message}\n${err.response.data.message}`);
      alert(err.response.data.message);
    }
  };

  const addTask = async todoId => {
    try {
      const newTask = prompt('Enter new task');
      const res = await axios.put(`/addTask/${todoId}`, { newTask });
      setTodo(res.data.todo);
      console.log(res.data.message, res.data.todo.tasks);
    } catch (err) {
      console.log(`${err.message}\n${err.response.data.message}`);
      alert(err.response.data.message);
    }
  };

  const editTask = async (todoId, task) => {
    try {
      const newTask = prompt('Enter new task');

      const res = await axios.put(`/editTask/${todoId}`, {
        task,
        newTask,
      });

      setTodo(res.data.todo);
      console.log(res.data.message, res.data.todo.tasks);
    } catch (err) {
      console.log(`${err.message}\n${err.response.data.message}`);
      alert(err.response.data.message);
    }
  };

  const deleteTask = async (todoId, task) => {
    try {
      const res = await axios.put(`/deleteTask/${todoId}`, {
        task,
      });

      setTodo(res.data.todo);
      console.log(res.data.message, res.data.todo.tasks);
    } catch (err) {
      console.log(`${err.message}\n${err.response.data.message}`);
    }
  };

  return (
    <>
      {todo ? (
        <>
          <h1 className="text-3xl text-center">Todo</h1>

          <table className="mt-8 mb-16 mx-auto w-2/3">
            <thead className="bg-[#f6f6f6]">
              <tr className="border">
                <th className="px-6 py-2.5 text-xl font-medium text-left" colSpan={2}>
                  {capitalize(todo.title)}
                </th>
                <th className="px-6 py-2.5 font-normal text-right" colSpan={2}>
                  <button className="text-green-500" onClick={() => editTitle(todo._id)}>
                    Edit Title
                  </button>
                </th>
              </tr>
            </thead>

            {todo.tasks.length ? (
              <tbody>
                <tr className="border">
                  <th className="px-6 py-2 text-left font-medium">No.</th>
                  <th className="px-6 py-2 text-left font-medium">Tasks</th>
                  <th className="px-6 py-2 text-left font-medium">Edit</th>
                  <th className="px-6 py-2 text-left font-medium text-center">Delete</th>
                </tr>

                {todo.tasks.map((task, index) => (
                  <tr className="border">
                    <td className="px-6 py-2.5">{index + 1}</td>
                    <td className="px-6 py-2.5">{capitalize(task)}</td>
                    <td className="px-6 py-2.5">
                      <button className="text-green-500" onClick={() => editTask(todo._id, task)}>
                        Edit
                      </button>
                    </td>
                    <td className="px-6 py-2.5 text-center">
                      <button className="text-red-500" onClick={() => deleteTask(todo._id, task)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              ''
            )}

            <tfoot>
              <tr className="border">
                <td className="px-6 py-2.5 text-center" colSpan={4}>
                  <button className="text-blue-500" onClick={() => addTask(todo._id)}>
                    Add New Task
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default Todo;
