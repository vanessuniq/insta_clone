import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DASHBOARD, LOGIN, NOT_FOUND, SIGN_UP } from "./constants/routes";
import UserContext from "./context/user";
import useAuthListener from "./hooks/useAuthListener";

const Login = lazy(() => import ("./pages/Login"));
const SignUp = lazy(() => import ("./pages/Signup"));
const NotFound = lazy(() => import ("./pages/NotFound"));
const Dashboard = lazy(() => import ("./pages/Dashboard"));

function App() {
  const { authUser } = useAuthListener();

  return (
    <UserContext.Provider value={{ authUser }}>
      <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <Route exact path={LOGIN} component={Login} />
            <Route exact path={SIGN_UP} component={SignUp} />
            <Route exact path={NOT_FOUND} component={NotFound} />
            <Route exact path={DASHBOARD} component={Dashboard} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
