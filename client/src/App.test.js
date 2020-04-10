import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserPlayers from "./UserPlayers";
import UserRequest from "./UserRequest";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div)
});

test("Load API",async () => {

})

test("Test 1", () => {

  const { getByText } = render(<UserPlayers/>)
  const vlad = getByText(/from/i)
  expect(vlad).toBeInTheDocument();
})

test("test 2",() => {

  const { getByText } = render(<UserPlayers/>)
  const usa = getByText(/name/i)
  expect(usa).toBeInTheDocument();

})

test("test 3",() => {

  const { getByText } = render(<App/>)
  const usa = getByText(/Vlad/i)
  expect(usa).toBeInTheDocument();

})
