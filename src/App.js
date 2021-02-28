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
import AboutList from "./components/pages/AboutList/AboutList";
import History from "./components/pages/History/History";
import MainAbout from "./components/pages/MainAbout/MainAbout";
import Structure from "./components/pages/Structure/Structure";
import EmployeesList from "./components/pages/EmployeesList/EmployeesList";
import Administration from "./components/pages/Administration/Administration";
import Documents from "./components/pages/Documents/Documents";
import Education from "./components/pages/Education/Education";
import EducationStandarts from "./components/pages/EducationStandarts/EducationStandarts";
import MatTechSup from "./components/pages/MatTechSup/MatTechSup";
import Scholarships from "./components/pages/Scholarships/Scholarships";
import PaidEducationalServices from "./components/pages/PaidEducationalServices/PaidEducationalServices";
import FinEcoActivities from "./components/pages/FinEcoActivities/FinEcoActivities";
import Contacts from "./components/pages/Contacts/Contacts";
import Vacancies from "./components/pages/Vacancies/Vacancies";

function App() {
  return (
    <div className="App">
      <Header />
      <Instruments />
      <DownClouds />
      <Navigation />




<Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/about-list" component={AboutList} />
          <Route path="/about-main" component={MainAbout} />
          <Route path="/structure" component={Structure} />
          <Route path="/employees-list" component={EmployeesList} />
          <Route path="/administration" component={Administration} />
          <Route path="/documents" component={Documents} />
          <Route path="/education" component={Education} />
          <Route path="/education-standarts" component={EducationStandarts} />
          <Route path="/mat-tech-sup" component={MatTechSup} />
          <Route path="/scholarships" component={Scholarships} />
          <Route path="/Paid-educational-services" component={PaidEducationalServices} />
          <Route path="/financial-and-economic-activities" component={FinEcoActivities} />
          <Route path="/history" component={History} />
          <Route exact path="/news" component={News} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/vacancies" component={Vacancies} />
          <Route path="/contacts" component={Contacts} />
          <Redirect to="/" />
        </Switch>


        <Footer/>
    </div>
  );
}

export default App;
