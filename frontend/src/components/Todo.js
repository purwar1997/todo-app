function Todo() {
  return (
    <>
      <h1 className="text-3xl text-center">Todo</h1>

      <table className="mt-8 mb-16 mx-auto w-2/3">
        <thead className="bg-[#f6f6f6]">
          <tr className="border">
            <th className="px-6 py-2.5 text-xl font-medium text-left" colspan={2}>
              Sunday Todo
            </th>
            <th className="px-6 py-2.5 font-normal text-right" colSpan={2}>
              <button className="text-green-500">Edit Title</button>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border">
            <th className="px-6 py-2 text-left font-medium">No.</th>
            <th className="px-6 py-2 text-left font-medium">Tasks</th>
            <th className="px-6 py-2 text-left font-medium">Edit</th>
            <th className="px-6 py-2 text-left font-medium text-center">Delete</th>
          </tr>

          <tr className="border">
            <td className="px-6 py-2.5">1</td>
            <td className="px-6 py-2.5">Take a bath</td>
            <td className="px-6 py-2.5">
              <button className="text-green-500">Edit</button>
            </td>
            <td className="px-6 py-2.5 text-center">
              <button className="text-red-500">Delete</button>
            </td>
          </tr>

          <tr className="border">
            <td className="px-6 py-2.5">2</td>
            <td className="px-6 py-2.5">Eat breakfast</td>
            <td className="px-6 py-2.5">
              <button className="text-green-500">Edit</button>
            </td>
            <td className="px-6 py-2.5 text-center">
              <button className="text-red-500">Delete</button>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr className="border">
            <td className="px-6 py-2.5 text-center" colSpan={4}>
              <button className="text-blue-500">Add New Task</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default Todo;
