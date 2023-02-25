import Main from "./components/Main";
import Homepage from "./components/Homepage"
import './App.css';
import BookingPage from "./components/BookingPage";
import Header from "./components/Header";


function App() {
  return (
    <>
    <Header />
    <Main>
      <Homepage />
      <BookingPage />
    </Main>
    </>
  );
}

export default App;
