import React from 'react';
import { shallow } from 'enzyme';
import Starter from '../components/SampleComponent';

// test to check if the App component matches the snapshot
describe('App Component', () => {
  it('matches the snapshot', () => {
    const component = shallow(<Starter />);
    expect(component).toMatchSnapshot();
  });
});
