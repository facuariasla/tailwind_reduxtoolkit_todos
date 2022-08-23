import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const TasksList = () => {
  // Llama al state tasks:
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // console.log('task', id);
    dispatch(deleteTask(id));
  };
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks ({tasks.length})</h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Create Task
        </Link>
      </header>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h4>{task.title}</h4>
              <div className="flex gap-x-2">
                <Link to={`/edit-task/${task.id}`} className='bg-zinc-600 px-2 py-1 text-xs rounded-md'>EDIT</Link>
                <button className="bg-red-500 px-2 py-1 text-xs rounded-md" onClick={() => handleDelete(task.id)}>DELETE</button>
              </div>
            </header>

            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;
