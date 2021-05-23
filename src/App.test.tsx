import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('app renders', () => {
  it('renders application title', () => {
    const { getByText } = render(<App />);
    expect(getByText('React + TS + Docker')).toBeInTheDocument();
  });
});
