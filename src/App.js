import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navr from './Compotents/Navr/Navr';
import HeaderMain from './Compotents/HeaderMain/HeaderMain';
import Footer from './Compotents/Footer/Footer';
import PageNotFound from './Compotents/PageNotFound/PageNotFound';
import MainServicePage from './Compotents/Services/MainServicePage/MainServicePage';
import About from './Compotents/About/About';
import Contact from './Compotents/Contact/Contact';
import Sponsor from './Compotents/Sponsor/Sponsor';

function App() {
  return (
    <div className="main-app-class">
      {/* This Whole Page use for Proper Routing */}
      <Router>
        <Navr></Navr>
        <Switch>
          <Route exact path="/" component={HeaderMain} />
          <Route exact path="/home" component={HeaderMain}/>
          <Route exact path="/services" component={MainServicePage}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/sponsors" component={Sponsor}/>
          <Route path='*' component={PageNotFound} />
          
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
