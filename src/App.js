import './App.css';
import {
  HashRouter as Router,
  Switch, Route
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Courses from './pages/Courses';
import ScrollToTop from './common/ScrollToTop';
import NavBar from './components/navBar/NavBar';
function App() {
  return (
    <>
    <Router>
    <ScrollToTop/>
    <NavBar/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/courses" exact component={Courses} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
