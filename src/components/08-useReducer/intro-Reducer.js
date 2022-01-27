// console.log('hola mundo');
const initialState =[{
    id:1,
    todo: 'comprar pan',
    done: false,
}];
const todoReducer = ( state = initialState, action)=>{
    if(action?.type=='agregar')
    {
        return[...state,action.payload];
    }
    return state;
}
let todos = todoReducer();
//NO USAR PUSH, modifica el objeto

const newTodo = {
    id:2,
    todo: 'comprar leche',
    done: false,
}

const agregarTodoAction ={
    type:'agregar',
    payload: newTodo 
}

todos = todoReducer(todos,agregarTodoAction);

console.log(todos);