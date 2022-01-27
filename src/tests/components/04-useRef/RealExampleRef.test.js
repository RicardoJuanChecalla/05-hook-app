import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Pruebas en <RealExampleRef/>', () => {
    const wrapper = shallow(<RealExampleRef />);
  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });
  test('Debe de mostrarse el componente <MultipleCustomHooks/>', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
});
