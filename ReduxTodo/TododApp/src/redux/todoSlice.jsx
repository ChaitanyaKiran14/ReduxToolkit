import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todos : []
    },

    reducers : {
        addTodo : (state, action) => {
            let todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        

        removeTodo : (state, action) => {
            const updatedTodos = [...state.todos]
            updatedTodos.splice(action.payload, 1)
            state.todos = updatedTodos
        }

    }
})

export const { addTodo, removeTodo}  = todoSlice.actions
export default todoSlice.reducer