/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Numpad from '../components/numpad'

describe('Numpad', () => {
  it('Numpad render', () => {
    const component = renderer.create(<Numpad/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
