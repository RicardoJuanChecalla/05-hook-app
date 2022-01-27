// import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks'
import '@testing-library/jest-dom';
import { useCounter } from '../../hooks/useCounter';

describe('pruebas en useCounter', () => {
  test('debe retornar los valores por defecto', () => {
    const { result } = renderHook( () => useCounter() );
    //console.log(result.current.counter);
    expect(result.current.counter).toBe(10);
    expect( typeof result.current.increment).toBe('function');
    expect( typeof result.current.decrement).toBe('function');
    expect( typeof result.current.reset).toBe('function');
  });
  test('debe retornar el valor definido de 100', () => {
    const valor = 100;
    const { result } = renderHook( () => useCounter(valor) );
    expect(result.current.counter).toBe(valor);
  });
  test('debe de incrementar el counter en 1', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { increment } = result.current;
    act(()=>{
        increment();
    });
    const {counter} = result.current;
    expect(counter).toBe(101);
  });
  test('debe de decrementar el counter en 1', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { decrement } = result.current;
    act(()=>{
        decrement();
    });
    const {counter} = result.current;
    expect(counter).toBe(99);
  });
  test('debe de restablecer el counter al valor por defecto', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { decrement, reset } = result.current;
    act(()=>{
        decrement();
        reset();
    });
    const {counter} = result.current;
    expect(counter).toBe(100);
  });
});
