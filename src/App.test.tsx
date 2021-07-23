import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


test('renders hello world', () => {
  const app = shallow(<App />);
  const linkElement = app.find('h1').text();
  expect(linkElement).toEqual('Hello World');
});
