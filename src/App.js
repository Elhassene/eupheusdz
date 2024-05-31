// App.js
import './App.css';
import {
  HashRouter as Router,
  Switch, Route
} from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Contact from './pages/Contact';
import About from './pages/About';
import Courses from './pages/Courses';
import ScrollToTop from './common/ScrollToTop';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { TokenProvider } from './TokenContext';

function App() {
  return (
    <TokenProvider>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </TokenProvider>
  );
}

export default App;
