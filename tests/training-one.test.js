import React from 'react';
import TrainingOne from '../screens/training-one';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {findByTestAttr} from '../screens/training-one';

Enzyme.configure({ adapter: new Adapter() });

test('renders correctly the snapshot', () => {
    const tree = renderer.create(<TrainingOne />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('TrainingOne', () => {
    it('stop watch', () => {
      const wrapper = shallow(<TrainingOne />);
      const instance = wrapper.instance();
  
      const input = findByTestAttr(wrapper, "inputAnswer");
      input.simulate("changeText", "32");

      const button = findByTestAttr(wrapper, "press-button");
      button.simulate("press");
      wrapper.update();
  
      jest.spyOn(instance, 'handleAnswer');
      expect(instance.state.isStopwatchActive).toBe(true);
    })
  })

