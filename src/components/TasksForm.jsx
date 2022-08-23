import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTasks, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const TasksForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTasks({ ...task, id: uuid() }));
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      const tarea = tasks.find((task) => task.id === params.id);
      setTask(tarea);
    }
  }, [params.id, tasks]);

  return (
    <div>
      <h1>{params.id ? "Edit" : "Create"}</h1>
      <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
        <label htmlFor="title" className="block text-xs font-bold mb-2">
          Task:
        </label>
        <input
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          id="title"
          type="text"
          name="title"
          value={task?.title}
          onChange={handleChange}
        />
        <label htmlFor="description" className="block text-xs font-bold mb-2">
          Description:
        </label>
        <textarea
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          id="description"
          name="description"
          placeholder="Write a task..."
          onChange={handleChange}
          value={task?.description}
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 px-2 py-1 w-full rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default TasksForm;
