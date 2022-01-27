import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { AppRouter } from '../../../components/09-useContext/AppRouter';

describe('Pruebas en <AppRouter />', () => {
    const user = {
        name: 'Ricardo',
        email: 'rchecalla@cmactacna.com.pe'
    }
    const wrapper = mount(
        <UserContext.Provider value={{user:user}}>
            <AppRouter />
        </UserContext.Provider>
    );
  test('debe de mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot();
  });
  
});
