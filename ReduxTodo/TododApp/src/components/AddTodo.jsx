import { useDispatch } from 'react-redux';
import { useState  } from 'react';
import { addTodo } from '../redux/todoSlice';

const AddTodo = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const onAddTodo = (event) => {
        event.preventDefault()
        dispatch(addTodo(text))
        //dispatch uses reducer and make changes in store
        setText('')

    }





    return(
       <form className='m-5' onSubmit={onAddTodo}>
        <br/>
              
        <input type='text' value={text} onChange={(event) => setText(event.target.value)} />
        <br/>
        <br/>
        <button type="submit" >ADD TODO </button>
       </form>
    )

}

export default AddTodo