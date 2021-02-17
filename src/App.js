// import logo from './logo.svg';
import "./App.css";
import ImageCarousel from "./components/carousel/carousel";
import { DownClouds, UpClouds } from "./components/clouds/clouds";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navigation from "./components/Navigation/Navigation";
import NavigationButton from "./components/Navigation/Navigation-button/Navigation-button";
import Instruments from "./components/instruments/Instruments";
import DropDownMenu from "./components/dropdown/dropdown";

function App() {
  return (
    <div className="App">
      <Header />
      <Instruments />
      <DownClouds />
      <NavigationButton/>

      <Navigation />
      {/* <Navigation />
      <ImageCarousel />

      <Footer /> */}
    </div>
  );
}

export default App;
