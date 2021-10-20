import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Header from './Pages/Shared/Header/Header/Header';
import Login from './Pages/Shared/Login/Login/Login';
import Register from './Pages/Shared/Login/Register/Register';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Shared/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound'


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetail />
            </PrivateRoute>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App;
