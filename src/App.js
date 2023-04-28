
import { Route } from 'react-router-dom';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Forgot } from './pages/forgotpass';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { Dashboard } from './pages/Dashboard';
import { Reset } from './pages/resetpassword';
import { Firstpage } from './pages/emtypage';

function App() {

  return (
    <div className="App">
      <Route exact path='/'>
        <Firstpage/>
      </Route>
      {/* login page page*/}
  <Route path='/login'>
    <Login/>
  </Route>

  {/* sign up page*/}
  <Route path='/signup'>
    <Signup/>
  </Route>
  {/* Forgot password page */}
  <Route path="/forgotpassword">
    <Forgot/>
  </Route>
  {/* Dashboard */}
  <Route path='/dashboard'>
    <Dashboard/>
  </Route>
  {/* reset password */}
  <Route path="/resetpassword/:id/:token">
    <Reset/>
  </Route>
    </div>
  );
}

export default App;
