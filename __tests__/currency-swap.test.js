/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import CurrencySwap from '../components/currency-swap.js'

describe('CurrencySwap', () => {
  it('CurrencySwap render', () => {
    const component = renderer.create(<CurrencySwap/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
