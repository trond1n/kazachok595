// import logo from './logo.svg';
import "./App.css";
import ImageCarousel from "./components/carousel/carousel";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Instruments from "./components/instruments/Instruments";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <Instruments />
      {/* <Navigation />
      <ImageCarousel />

      <Footer /> */}
    </div>
  );
}

export default App;
