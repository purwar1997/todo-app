import { useState } from 'react';
import axios from 'axios';

function Form() {
  const [title, setTitle] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const res = await axios.post('/createTodo', { title });
      console.log(res.data);
    } catch (err) {
      console.log(`${err.message}\n${err.response.data.message}`);
      alert(err.response.data.message);
    }

    setTitle('');
  };

  return (
    <>
      <h1 className="mt-10 text-3xl text-center">Create new Todo</h1>

      <form
        className="mt-10 mb-16 flex flex-col items-center gap-6"
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-start gap-2">
          <label className="text-lg" htmlFor="title">
            Enter title for a new todo
          </label>

          <input
            className="w-96 bg-[#f6f6f6] border rounded px-4 py-2.5 focus:outline-[#3944F7]"
            type="text"
            name="todo-title"
            id="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>

        <button
          className="bg-[#656EF5] px-6 py-2 rounded text-white text-lg transition hover:opacity-90"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
