import React from 'react'
import "./styles.css"
import { addTask} from '../../redux/states/task'
import {useDispatch, useSelector } from 'react-redux'
import { Camelize } from 'utils/camelize'
import { addTasks } from 'connect/TodosConnect';
import  {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const TodoForm = () => {
    const [text, setText] = React.useState("")
    const [isEmpty, setIsEmpty] = React.useState(true);
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks.value)

    React.useEffect(() => {
        text.length > 0 ? setIsEmpty(false): setIsEmpty(true)
    },[text])

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(text.trim() === ""){
            return
        }
        if(e.key !== 'Enter'){
            return
          }

        const data = await addTasks({
            id: tasks.length + 2,
            label: Camelize(text),
            checked: false
        })
        
        if(data.codigo === 201){
           dispatch(addTask(data.data))
           setText("")
           toast("Task added successfully! 🎉",
           {
            position: "bottom-center",
            type: "success",
            theme: "colored"
           }
           )
        }else{
            toast("Task wasn't added. Please, try again 😢",
            {
             position: "bottom-center",
             type: "error",
             theme: "colored"
            }
            )  
        }
        
    }
  return (
    <form onSubmit={handleSubmit} className="formContainer">
        <input type="text" id="inputText" className='inputText' placeholder='Enter new to do' value={text} onChange={(e) => setText(e.target.value)} onKeyUp={handleSubmit} />
        <button className='BtnSend' type='submit' disabled={isEmpty}>ADD TO DO</button>
        <ToastContainer/>
    </form>
  )
}

export default TodoForm