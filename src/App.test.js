import { fireEvent, getByText, getByTestId, render, screen, getByRole, getByLabelText } from '@testing-library/react';

import App from './App';
import Main from './components/Main';
import Hero from './components/Hero';
import BookingPage from './components/BookingPage';
import Highlight from './components/Highlights';
import { MemoryRouter as Router } from 'react-router-dom';

test('Homepage displays on initial landing', () => {
  render(<Highlight />);
  const header = screen.getByText("Weekly Specials");
  expect(header).toBeInTheDocument()
});

test('Router problem', () => {
  render(
    <Router>
      <Hero />
    </Router>
  );
  const header = screen.getByText("Little Lemon");
  expect(header).toBeInTheDocument()
});

test('Booking Form Displays', () => {
  const availableTimes = [];
  
  render(
    <Router>
      <BookingPage availableTimes={availableTimes} />
    </Router>
  );
 
  const header = screen.getByText("Choose a Date");
  expect(header).toBeInTheDocument()
});

test('Available times show correct default', () => {
  render(
    <Router>
      <Main />
    </Router>
  );

  const button = screen.getByText("Reserve a Table")
  fireEvent.click(button);

  /*const timesbutton = screen.getByTestId("res-time");*/
  const timesbutton = screen.getByText("17:00")
  fireEvent.click(timesbutton);

  expect(timesbutton).toBeInTheDocument()
});

test('Available times added time when date is changed', () => {
  render(
    <Router>
      <Main />
    </Router>
  );

  const button = screen.getByText("Reserve a Table")
  fireEvent.click(button);

  const newDate = "3/12/2023"

  const dateButton = screen.getByTestId("res-date");
  fireEvent.click(dateButton)
  fireEvent.change(dateButton, {target: {value: newDate}})

  const timesbutton = screen.getByTestId("res-time");
  fireEvent.click(timesbutton);

  const addedTime = screen.getByText("22:00")

  expect(addedTime).toBeInTheDocument()
});

test('App navigates to confirmation page on successfull booking', () => {
  
  render(
    <Router>
      <Main />
    </Router>
  );

  const button = screen.getByText("Reserve a Table")
  fireEvent.click(button);
 
  const dateInput = screen.getByTestId("res-date");
  const submitbutton = screen.getByText("Make your reservation")
  
  const d = new Date()
  
  fireEvent.change(dateInput, {
    target: { value: d }
  });

  fireEvent.click(submitbutton)

  const confirmation = screen.getByText("Table reservation is confirmed")
  expect(confirmation).toBeInTheDocument
});

test('App does not navigate to confirmation page if date field is empty', () => {
  
  render(
    <Router>
      <Main />
    </Router>
  );

  const button = screen.getByText("Reserve a Table")
  fireEvent.click(button);
 
  const dateInput = screen.getByTestId("res-date");
  const submitbutton = screen.getByText("Make your reservation")

  fireEvent.click(submitbutton)

  const confirmation = screen.getByText("Table reservation is confirmed")
  expect(confirmation).toNotBeInTheDocument
});