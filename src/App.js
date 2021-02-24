// import logo from './logo.svg';
import "./App.css";
import { DownClouds, UpClouds } from "./components/clouds/clouds";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navigation from "./components/Navigation/Navigation";
import Instruments from "./components/instruments/Instruments";
import MainPage from "./components/pages/MainPage/MainPage";
import { Redirect, Route, Switch } from "react-router-dom";
import News from "./components/pages/News/News";
import Gallery from "./components/pages/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Instruments />
      <DownClouds />
      <Navigation />




<Switch>
          <Route exact path="/" component={MainPage} />
          {/* <Route path="/news/:id" component={NewsItem} /> */}
          <Route path="/news" component={News} />
          <Route path="/gallery" component={Gallery} />
          <Redirect to="/" />
        </Switch>


        <Footer/>
    </div>
  );
}

export default App;
