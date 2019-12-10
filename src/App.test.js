import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}, state = {}) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);

  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, "button-increment");
  expect(incrementButton.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counter = findByTestAttr(wrapper, "counter");
  expect(counter.length).toBe(1);
});

test('renders counter start at 0', () => {

});

test('renders clicking button increments counter display', () => {

});
