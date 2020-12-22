/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import CurrencyTitle from '../components/currency-title'

describe('CurrencyTitle', () => {
  it('CurrencyTitle render', () => {
    const component = renderer.create(<CurrencyTitle/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
