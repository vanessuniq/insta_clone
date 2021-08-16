import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LOGIN } from "./constants/routes";

const Login = lazy(() => import ("./pages/login"));
function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route exact path={LOGIN} component={Login}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
