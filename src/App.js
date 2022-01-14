import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={ <Home /> } end />
        <Route path="about" element={ <About /> } end />
        <Route path="contact" element={ <Contact /> } end />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
