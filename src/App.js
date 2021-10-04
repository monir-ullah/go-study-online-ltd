// This is use for importing Components and CSS style
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
        {/* This is Navigation Section. Which will showes in all pages */}
        <Navr></Navr>
        <Switch>
          {/* This is use for Home page Routing */}
          <Route exact path="/" component={HeaderMain} />
          <Route exact path="/home" component={HeaderMain}/>

          {/* This is use for Servies page. Use in the route */}
          <Route exact path="/services" component={MainServicePage}/>
          {/* This is use for About page. Use in the route */}
          <Route exact path="/about" component={About}/>
           {/* This is use for Contact page. Use in the route */}
          <Route exact path="/contact" component={Contact}/>
          {/* This is use for Sponsor page. Use in the route */}
          <Route exact path="/sponsors" component={Sponsor}/>
          {/* This is use for Page not Found Page page. */}
          <Route path='*' component={PageNotFound} />
        </Switch>

        {/* This is footer Section. Which will showes in all pages */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
