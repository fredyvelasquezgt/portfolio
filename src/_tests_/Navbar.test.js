/* eslint-disable import/no-unresolved */
/**
 * @jest-environment jsdom
 * */

/* eslint-disable*/

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar';

it('Render NavBar'),
  () => {
    render(<Navbar />);
    //buscar elemento en el DOM
    const testElement = screen.getByTestId('nav1');
    expect(testElement).toBeInTheDocument();
  };

afterEach(cleanup);
it('renders Cover correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
});

it('matches snapshot', () => {
  const tree = renderer.create(<NavBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
