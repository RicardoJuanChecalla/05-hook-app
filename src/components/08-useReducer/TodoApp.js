import React, { useEffect, useReducer } from 'react';
// import { useForm } from '../../hooks/useForm';
import './style.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

// const initialState =[{
//     id: new Date().getTime(),
//     desc:'Aprender React',
//     done: false
// }]

// const init = () =>{
//     return [{
//         id: new Date().getTime(),
//         desc:'Aprender React',
//         done: false
//     }]
// }

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    // const [state, dispatch] = useReducer(first, second, third);
    // const [todos, dispach] = useReducer(todoReducer, initialState);
    const [todos, dispach] = useReducer(todoReducer, [], init );
    
    //const [formValues, handleInputChange] = useForm({
    // const [{description}, handleInputChange, reset] = useForm({
    //     description: ''
    // });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
    
    const handleDelete = (todoId)=>{
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispach(action);
    }

    const handleToggle = (todoId) =>{
        const action = {
            type: 'toggle',
            payload: todoId
        }
        dispach(action);
    }

    const handleAddTodo =(newTodo)=>{
        dispach({
            type: 'add',
            payload: newTodo
        });
    }

    // const handleSubmit =(e)=>{
    //     e.preventDefault();
    //     if(description.trim().length<=1){
    //         return;
    //     }
    //     // console.log('nueva tarea');
    //     const newTodo = {
    //         id: new Date().getTime(),
    //         desc: description,
    //         done: false
    //     };
    //     const action = {
    //         type: 'add',
    //         payload: newTodo
    //     };
    //     dispach(action);
    //     reset();
    // }
    
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                    {/* <ul className='list-group list-group-flush'>
                        {
                            todos.map( (todo, i) =>(
                                <li
                                    key={todo.id}
                                    className='list-group-item'
                                >
                                    <p 
                                        className={`${ todo.done && 'complete' }`}
                                        onClick={()=>handleToggle(todo.id)}
                                    >{i+1}. {todo.desc}</p>
                                    <button 
                                        className='btn btn-danger'
                                        onClick={()=>handleDelete(todo.id)}
                                    >Borrar</button>
                                </li>
                            ))
                        }
                    </ul> */}
                    <TodoList 
                        todos = { todos }
                        handleToggle = { handleToggle }
                        handleDelete = { handleDelete }
                    />
                </div>
                <div className='col-5'>
                    {/* <h4>Agregar Todo</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name='description'
                            className='form-control'
                            placeholder='Aprender ...'
                            autoComplete='off'
                            value={ description }
                            onChange={ handleInputChange }
                        />
                        <button
                            type='submit'
                            className='btn btn-outline-primary mt-1 btn-block'
                        >
                            Agregar
                        </button>
                    </form> */}
                    <TodoAdd
                        handleAddTodo ={handleAddTodo} 
                    />
                </div>
            </div>
        </div>
        );
}
