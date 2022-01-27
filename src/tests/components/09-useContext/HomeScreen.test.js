import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en  <HomeScreen />', () => {
    const user = {
        name: 'Ricardo',
        email: 'rchecalla@cmactacna.com.pe'
    }
    const wrapper = mount(
        <UserContext.Provider value={{user:user}}>
            <HomeScreen />
        </UserContext.Provider>  
    );
    
  test('Debe mostrarse correctamente', () => {
   expect(wrapper).toMatchSnapshot();
  });
});
