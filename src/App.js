import Main from "./components/Main";
import './App.css';
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Main />
      </>
    </BrowserRouter>
  );
}

export default App;
