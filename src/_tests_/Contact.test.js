/**
 * @jest-environment jsdom
 * */
/* eslint-disable*/

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';
import Contact from '../components/Works/Works';

describe('tests for Contact component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Contact />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
