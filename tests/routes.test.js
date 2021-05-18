import React from 'react';
import AddIntoStack from '../routes/routes';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('check the correct number of parameters of the function', () => {
  expect(AddIntoStack.arguments).toBe(null);
});

