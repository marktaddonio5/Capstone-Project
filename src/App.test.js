import { fireEvent, getByText, getByTestId, render, screen } from '@testing-library/react';

import App from './App';
import Main from './components/Main';
import Hero from './components/Hero';
import BookingPage from './components/BookingPage';


test('Homepage displays on initial landing', () => {
  render(<Hero />);
  const header = screen.getByText("Little Lemon");
  expect(header).toBeInTheDocument()
});


