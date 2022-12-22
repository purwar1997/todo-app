function TodoList() {
  return (
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
          <tr className="border">
            <td className="px-6 py-2.5">Sunday Todo</td>
            <td className="px-6 py-2.5">Dec 10</td>
            <td className="px-6 py-2.5">5</td>
            <td className="px-6 py-2.5">
              <button className="text-yellow-500">View</button>
            </td>
            <td className="px-6 py-2.5">
              <button className="text-red-500">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TodoList;
