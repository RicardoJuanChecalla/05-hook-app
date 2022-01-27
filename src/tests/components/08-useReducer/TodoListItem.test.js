import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";

describe('Pruebas en TodoListItem', () => {
const handleToggle = jest.fn();
const handleDelete = jest.fn();
 const wrapper = shallow(<TodoListItem todo={demoTodos[0]} index={0} handleToggle={handleToggle} handleDelete={handleDelete} />); 
 test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot(); 
  });
  test('debe de llamar a la funcion handleDelete', () => {
    wrapper.find('button').simulate('Click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test('debe de llamar a la funcion handleToggle', () => {
    wrapper.find('p').simulate('Click');
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test('debe de mostrar el texto correctamente', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
  });
  test('debe de tener la clase complete si el TODO.done=true', () => {
      const todo = demoTodos[0];
      todo.done = true;
    const wrapper = shallow(
    <TodoListItem 
        todo={todo} 
        index={0} 
        handleToggle={handleToggle} 
        handleDelete={handleDelete} 
    />
    );
    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
  
});
