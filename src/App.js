import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LOGIN, SIGN_UP } from "./constants/routes";

const Login = lazy(() => import ("./pages/login"));
const SignUp = lazy(() => import ("./pages/signup"))
function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route exact path={LOGIN} component={Login}/>
          <Route path={SIGN_UP} component={SignUp}/>
          
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
