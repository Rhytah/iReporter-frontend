import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../components/Landing';

describe('Landing Component', () => {
  it('matches the snapshot', () => {
    const component = shallow(<Landing />);
    expect(component).toMatchSnapshot();
  });
});
