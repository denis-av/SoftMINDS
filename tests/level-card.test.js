import React from 'react';
import LevelCard from '../components/level-card';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('match correct the snapshot', () => {
  const tree = renderer.create(<LevelCard />).toJSON();
  expect(tree).toMatchSnapshot();
});