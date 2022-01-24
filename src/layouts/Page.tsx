import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PageViewRoute from "../components/PageViewRoute";

// import all pages that are available at this level
import LandingPage from "../pages/LandingPage";
import CityPage from "../pages/CityPage";
import Impressum from "../pages/Impressum";
import Contact from "../pages/Contact";
// import TestPage from "../pages/TestPage";
import SamplePage from "../pages/SamplePage";

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
      <PageViewRoute
        title="LandingPage"
        path="/home"
        render={() => <LandingPage />}
      />
      {/* all cities are routed as /city/cityId, alternatively, we can change this to /c/cityId for shorter urls */}
      <PageViewRoute
        title="City"
        path="/city/:cityId"
        render={() => <CityPage />}
      />
      <PageViewRoute
        title="Impressum"
        path="/impressum"
        render={() => <Impressum />}
      />
      <PageViewRoute
        title="Contact"
        path="/contact"
        render={() => <Contact />}
      />

      {/* DEV ONLY: we can keep the test page, but maybe use a different url */}
      <PageViewRoute title="Test" path="/test" render={() => <SamplePage />} />

      {/* If no other route matched, redirect i.e. to a /home or /dashboard */}
      <Route path="/" render={() => <Redirect to="/home" />} />
    </Switch>
  </BrowserRouter>
);

export default Page;
