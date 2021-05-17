import { Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NoMatch from './components/NoMatch';

export default function App() {
  return(
    <Switch>
      <Route exact path="/"><h1>Home</h1></Route>
      <Route exact path="/login"><Login /></Route>
      <Route exact path="/signup"><SignUp /></Route>
      <Route path="*"><NoMatch /></Route>
    </Switch>
  );
}