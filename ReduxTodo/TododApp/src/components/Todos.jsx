import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../redux/todoSlice"

const Todos = () => {
   const todos =  useSelector(state => state.todos)
   const dispatch = useDispatch()


    return (

        <div>

            {todos.map(each => (
                <li key = {each.id}> {each.text}   <span><button onClick={() => dispatch(removeTodo(each.id)) }>Delete</button></span> </li>
            ))}
            
        </div>
    )


}

export default Todos