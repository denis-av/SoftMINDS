import React from 'react';
import TrainingThree from '../screens/training-three';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {findByTestAttr} from '../screens/training-two';

Enzyme.configure({ adapter: new Adapter() });

test('renders correctly the snapshot', () => {
    const tree = renderer.create(<TrainingThree />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('TrainingThree', () => {
    it('stop watch', () => {
      const wrapper = shallow(<TrainingThree />);
      const instance = wrapper.instance();
  
      const input = findByTestAttr(wrapper, "inputAnswer");
      input.simulate("changeText", "5");

      const button = findByTestAttr(wrapper, "press-button");
      button.simulate("press");
      wrapper.update();
  
      jest.spyOn(instance, 'handleAnswer');
      expect(instance.state.isStopwatchActive).toBe(true);
    })
  })

