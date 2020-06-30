import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders banner', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/what's new on #pwaconfit/i);
  expect(linkElement).toBeInTheDocument();
});
