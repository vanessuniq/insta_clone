import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LOGIN, NOT_FOUND, SIGN_UP } from "./constants/routes";

const Login = lazy(() => import ("./pages/login"));
const SignUp = lazy(() => import ("./pages/signup"));
const NotFound = lazy(() => import ("./pages/notFound"))
function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route exact path={LOGIN} component={Login}/>
          <Route path={SIGN_UP} component={SignUp}/>
          <Route path={NOT_FOUND} component={NotFound}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
