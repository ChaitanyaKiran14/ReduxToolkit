import { useDispatch, useSelector } from 'react-redux';
import { useState  } from 'react';
import { addTodo , removeTodo} from '../redux/todoSlice';

const AddTodo = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const onAddTodo = (event) => {
        event.preventDefault()
        dispatch(addTodo(text))
        //dispatch uses reducer and make changes in store
        setText('')

    }

    const todos = useSelector(state => state.todos)

    return(
        <div>
            <div>
            <form className='m-5' onSubmit={onAddTodo}>
                <br/>
                    
                <input type='text' value={text} onChange={(event) => setText(event.target.value)} />
                <br/>
                <br/>
                <button type="submit" >ADD TODO </button>
       </form>

            </div>
            <div>
                <ul>
                    {todos.map(  (each) => (
                        <li key = {each.id} >{each.text} <span><button onClick={() => dispatch(removeTodo(each.id)) }>Delete</button></span></li>
                    ) )}
                </ul>


            </div>
        

        </div>
      




    )

}

export default AddTodo