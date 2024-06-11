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
import CourseView from './pages/CourseView';
import AnnoncementPage from './pages/AnnoncementPage';
import { UserProvider } from './UserContext';


function App() {
  return (
    <TokenProvider>
      <UserProvider>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/course-preview" exact component={CourseView} />
          <Route path="/upload-course" exact component={AnnoncementPage} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
      </UserProvider>
    </TokenProvider>
  );
}

export default App;
