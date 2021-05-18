import React from 'react';
import TrainingTwo from '../screens/training-two';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {findByTestAttr} from '../screens/training-one';

Enzyme.configure({ adapter: new Adapter() });

test('renders correctly the snapshot', () => {
    const tree = renderer.create(<TrainingTwo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('TrainingTwo', () => {
    it('correct answer => the watch stop counting', () => {
      const wrapper = shallow(<TrainingTwo />);
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

