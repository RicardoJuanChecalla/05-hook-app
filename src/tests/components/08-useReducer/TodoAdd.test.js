import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe('Pruebas en  <TodoAdd />', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo={handleAddTodo} 
        />
    ); 
  test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
  });
  test('NO debe de llamar a handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({preventDefault(){}});
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });
  test('Debe de llamar a la funcion handleAddTodo', () => {
    const valor = 'Aprender Mongo';
    wrapper.find('input').simulate('change',{
        target: {
            value: valor,
            name: 'description' 
        }
    });
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({preventDefault(){}});
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith({
        id: expect.any(Number),
        desc: valor,
        done: false
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  });
  
});
