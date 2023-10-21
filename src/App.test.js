import { render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import App from './App';

test('renders data from backend', () => {
  fetchMock.mockResponseOnce(JSON.stringify({ message: 'Hello World!' }));
  render(<App />);
  const linkElement = screen.getByText(/Hello World!/i);
  expect(linkElement).toBeInTheDocument();
});
