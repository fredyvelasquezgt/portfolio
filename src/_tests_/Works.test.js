/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-unresolved */
/**
 * @jest-environment jsdom
 * */

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Works from '../components/Works/Works';

it('Renders works correctly', () => {
  const { getByTestId } = render(<Works />);
  expect(getByTestId('progress-text')).toHaveTextContent('Python');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Works />).toJSON();
  expect(tree).toMatchSnapshot();
});
