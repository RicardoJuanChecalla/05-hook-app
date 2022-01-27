import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks'
import '@testing-library/jest-dom';
import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from '../../fixtures/demoTodos';


describe('prueba componente todoReducer', () => {
  test('debe retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });
  test('debe de agregar un TODO', () => {
    const NewdemoTodo = {
        id: 3,
        desc: 'Aprender Mongo',
        done: false,
    }
    const action = {
        type: 'add',
        payload: NewdemoTodo
    }  
    const state = todoReducer(demoTodos, action);
    expect(state).not.toEqual(demoTodos);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, NewdemoTodo]);
  });
  test('Debe de borrar un TODO', () => {
    const action = {
      type: 'delete',
      payload: 2
    }  
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[0]]);
  });
  test('Debe de cambiar el toggle del TODO', () => {
    const ModifdemoTodo = {
      id: 2,
      desc: 'Aprender Mongo',
      done: false,
    } 
    const action = {
      type: 'toggle',
      payload: 2
    }  
    const state = todoReducer(demoTodos, action);
    expect(state[1].done).toBe(true);
    expect(state[0]).toEqual(demoTodos[0]);
  });
  
  
});
