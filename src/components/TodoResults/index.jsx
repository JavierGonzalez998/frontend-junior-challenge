import React from "react";
import "./styles.css";
import { useSelector} from 'react-redux'
const TodoResults = () => {
  // Fix an ability to calculate completed tasks
  const tasks = useSelector((state) => state.tasks.value)
  const [count, setCount] = React.useState(0);

  React.useEffect(() =>{
    let counting = 0
    if(tasks.length > 0){
      tasks.forEach(item => {
        if(item.checked){
          counting = counting + 1
        }
      })
    }
    setCount(counting)

    return () => {
      counting = 0
    }
  },[tasks])

  return <div className="todo-results">Done: {count}</div>;
};

export default TodoResults;
