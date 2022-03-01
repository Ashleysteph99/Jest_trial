import { render, screen } from '@testing-library/react';
import App from './App';

const testargs = () => { //parameter to "renders learn react link"  
  render(<App />);
  const linkElement = screen.getByText(/learn unit testing/i);
  expect(linkElement).toBeInTheDocument();
}

test('renders learn react link', testargs);
