import { Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import DashBoard from './pages/DashBoard';
import NotFound from './components/NotFound';

export default function App() {
  return(
    <Switch>
      <Route exact path="/"><DashBoard /></Route>
      <Route exact path="/login"><Login /></Route>
      <Route exact path="/signup"><SignUp /></Route>
      <Route path="*"><NotFound /></Route>
    </Switch>
  );
}