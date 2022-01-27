import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';

describe('Pruebas en  <LoginScreen />', () => {
    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen />
        </UserContext.Provider>  
    );
  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de ejecutar el setUser con el argumento cerrado', () => {
    //wrapper.find('button').simulate('click');
    wrapper.find('button').prop('onClick')();
    expect( setUser ).toHaveBeenCalledWith({
        id:123,
        name:'Ricardo'
      });
  });
  
});
