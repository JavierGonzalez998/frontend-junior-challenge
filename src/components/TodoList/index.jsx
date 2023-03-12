import React from "react";
import "./styles.css";
import TodoListItem from "components/TodoListItem";
import { useSelector, useDispatch } from 'react-redux'
import { getTask, checkTask, deleteTask } from '../../redux/states/task'
import { getTasks } from 'connect/TodosConnect'
import { checkTasks, deleteTasks } from "connect/TodosConnect";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.value)

  const loadData = async () => {
    const data = await getTasks()
    if (data.code === 200) {
      dispatch(getTask(data.data))
    }
  }

  React.useEffect(() => {
    loadData()
  }, [])

  const handleDelete = async (todoId) => {
    // Fix an ability to delete task
    const data = await deleteTasks({ id: todoId })
    if (data.codigo === 200) {
      dispatch(deleteTask(todoId))
      toast("Task deleted succesfully! 🎉", {
        type: "success",
        position: "bottom-center",
        theme: "colored"
      })
    }else{
      toast("Error trying delete the task. Please, try again 😭", {
        type: "error",
        position: "bottom-center",
        theme: "colored"
      })
    }

  };

  const toggleCheck = async (todoId, isChecked) => {
    // Fix an ability to toggle task
    const data = await checkTasks({
      id: todoId,
      checked: !isChecked
    })
    if (data.codigo === 200) {
      dispatch(checkTask(data.data))
      toast(`The task was checked! 🎉`, {
        type: "success",
        position: "bottom-center",
        theme: "colored"
      })
    }else{
      toast(`The task wasn't checked. Please, try again 😭`, {
        type: "error",
        position: "bottom-center",
        theme: "colored"
      })
    }

  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {tasks.length > 0 ?
        <div className="todo-list-content">
          {tasks.map((item) => {
            return (
              <TodoListItem checked={item.checked} onCheck={() => toggleCheck(item.id, item.checked)} onDelete={() => handleDelete(item.id)} label={item.label} key={item.id} />
            )
          })}
        </div>
        :
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      }
      <ToastContainer/>
    </div>
  );
};

export default TodoList;
