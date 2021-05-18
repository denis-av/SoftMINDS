import React from 'react';
import Menu from '../screens/menu';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders correctly the snapshot', () => {
  const tree = renderer.create(<Menu />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Menu', () => {
  it('show first element from the Menu: Levels', () => {
    const wrapper = shallow(<Menu />);
    const texts = wrapper.find('Text').at(0);
    expect(texts.props().children).toBe('LEVELS');
  })
})

describe('Menu', () => {
    it('show first element from the Menu: Ranking', () => {
      const wrapper = shallow(<Menu />);
      const texts = wrapper.find('Text').at(1);
      expect(texts.props().children).toBe('RANKING');
    })
  })

describe('Menu', () => {
    it('show first element from the Menu: Training', () => {
      const wrapper = shallow(<Menu />);
      const texts = wrapper.find('Text').at(2);
      expect(texts.props().children).toBe('TRAINING');
    })
  })

describe('Menu', () => {
    it('show first element from the Menu: Help', () => {
      const wrapper = shallow(<Menu />);
      const texts = wrapper.find('Text').at(3);
      expect(texts.props().children).toBe('HELP');
    })
  })

describe('Menu', () => {
    it('check the initial state of the email', () => {
      const wrapper = shallow(<Menu />);
      const instance = wrapper.instance();
      jest.spyOn(instance, 'handleGetEmail');
      expect(instance.state.email).toBe("");
    })
  })