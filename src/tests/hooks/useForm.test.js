// import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks'
import '@testing-library/jest-dom';
import { useForm } from '../../hooks/useForm';

describe('pruebas en useForm', () => {
    const initialForm = {
        name: 'Ricardo',
        email: 'rchecalla@cmactacna.com.pe'
    }
  test('debe de regrear un formulario por defecto', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [formValues, handleInputChange, reset] = result.current;   
    expect( formValues ).toEqual(initialForm);
    expect( typeof handleInputChange ).toBe('function');
    expect( typeof reset ).toBe('function');
  });
  test('debe de cambiar el valor del formulario cambiar name', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [,handleInputChange] = result.current;
    act(()=>{
        handleInputChange({
            target:{ 
                name:'name', 
                value: 'Juan'
            }
        });
    });
    const [ formValues ] = result.current;
    expect(formValues.name).toBe('Juan');
    expect(formValues).toEqual({...initialForm, name:'Juan'})
  });
  test('debe de reestablecer el formulario con reset', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [,handleInputChange,reset] = result.current;
    act(()=>{
        handleInputChange({
            target:{ 
                name:'name', 
                value: 'Juan'
            }
        });
        reset();
    });
    const [ formValues ] = result.current;
    expect(formValues.name).toBe('Ricardo');
    expect(formValues).toEqual(initialForm)
  });
  
});
