import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { HooksApp } from '../HooksApp';

describe('pruebas en <HooksApp/>',()=>{
    test('debe mostrarse correctamente',()=>{
        const wrapper = shallow(<HooksApp/>);
        expect(wrapper).toMatchSnapshot();
    })
})