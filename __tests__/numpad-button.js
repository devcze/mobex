/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import NumpadButton from '../components/numpad-button'

describe('NumpadButton', () => {
  it('NumpadButton render', () => {
    const component = renderer.create(<NumpadButton/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
