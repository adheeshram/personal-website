import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio introduction and primary sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Adheesh Ramanath' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /physical-system model generation/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /engineering work/i })).toBeInTheDocument();
});
