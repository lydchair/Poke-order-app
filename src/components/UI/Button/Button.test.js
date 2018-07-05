import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';



test('<Button /> renders with text as prop', () => {
  const tree = renderer.create(
    <Button />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

