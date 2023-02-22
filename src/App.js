
import Header from "./components/Header"
import  Main from "./components/Main"
import Footer from "./components/Footer.js"
import Hero from "./components/Hero"
import Highlight from "./components/Highlights"
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Highlight />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
