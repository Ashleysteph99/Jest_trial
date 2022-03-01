import { render, screen } from '@testing-library/react';
import App from './App';

const testargs=()=> {
  render(<App />);
  const linkElement = screen.getByText(/learn unit testing/i);
  expect(linkElement).toBeInTheDocument();
}

test('renders learn react link',testargs );
