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

test('renders increment button without error', () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, "button-increment");
  expect(incrementButton.length).toBe(1);
});

test('renders decrement button without error', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "button-decrement");
  expect(decrementButton.length).toBe(1);
});

test('renders counter display without error', () => {
  const wrapper = setup();
  const counter = findByTestAttr(wrapper, "counter");
  expect(counter.length).toBe(1);
});

test('renders counter start at 0', () => {
  const wrapper = setup();
  const initialCount = wrapper.state('count');
  expect(initialCount).toBe(0);
});

test('renders clicking button increments counter display', () => {
  const count = 5;
  const wrapper = setup({}, { count });
  const incrementButton = findByTestAttr(wrapper, "button-increment");
  incrementButton.simulate("click");
  const counter = findByTestAttr(wrapper, "counter");
  expect(counter.text()).toContain(count + 1);
});

test('renders clicking button decrements couter display', () => {
  const count = 4;
  const wrapper = setup({}, { count });
  const decrementButton = findByTestAttr(wrapper, "button-decrement");
  decrementButton.simulate('click');
  const counter = findByTestAttr(wrapper, 'counter');
  expect(counter.text()).toContain(count - 1);
});

test('count is 0 and decrement button is clicked, counter still display 0', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "button-decrement");
  decrementButton.simulate('click');

  const counter = findByTestAttr(wrapper, 'counter');
  expect(counter.text()).toContain(0);
});

test('count is 0 and decrement button is clicked, error message should display', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "button-decrement");
  decrementButton.simulate('click');

  const errorDisplay = findByTestAttr(wrapper, 'error');
  expect(errorDisplay.length).toBe(1);
  expect(errorDisplay.text()).toBe("The counter can't go below zero");
});

test('count is -1, error message should display and increment button is clicked, error message should disapper', () => {
  const wrapper = setup({}, { count: -1 });
  let errorDisplay = findByTestAttr(wrapper, "error");
  expect(errorDisplay.length).toBe(1);
  expect(errorDisplay.text()).toBe("The counter can't go below zero");

  const incrementButton = findByTestAttr(wrapper, "button-increment");
  incrementButton.simulate('click');

  errorDisplay = findByTestAttr(wrapper, "error");
  expect(errorDisplay.exists()).toBeFalsy();
});

test('count is large or equal than 0, error messageg should not display', () => {
  const wrapper = setup();
  const errorDisplay = findByTestAttr(wrapper, "error");
  expect(errorDisplay.length).toBe(0);
});
