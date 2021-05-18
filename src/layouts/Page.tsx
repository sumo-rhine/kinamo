import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PageViewRoute from "../components/PageViewRoute";

// import all pages that are available at this level
import LandingPage from "../pages/LandingPage";
import TestPage from "../pages/TestPage";

/**
 * The Page component is a slim wrapper around the usual page navigation that
 * actually loads the real pages. This is necssary to route permalink routes
 * outside of this compnent, to finally render the permalink components without
 * Header etc.
 * If a new page is added, put the routing here.
 */

const Page: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {/* Dev only  - replace with the real pages*/}
      <PageViewRoute
        title="LandingPage"
        path="/home"
        render={() => <LandingPage />}
      />
      <PageViewRoute title="Test" path="/test" render={() => <TestPage />} />

      {/* If no other route matched, redirect i.e. to a /home or /dashboard */}
      <Route path="/" render={() => <Redirect to="/home" />} />
    </Switch>
  </BrowserRouter>
);

export default Page;
