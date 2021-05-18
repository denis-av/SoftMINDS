import React from 'react';
import NumberCard from '../components/number-card';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders correctly the snapshot', () => {
  const tree = renderer.create(<NumberCard />).toJSON();
  expect(tree).toMatchSnapshot();
});