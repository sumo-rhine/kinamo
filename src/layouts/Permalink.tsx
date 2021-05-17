import { BrowserRouter, Switch, Route } from "react-router-dom";
import PermalinkResolver from "../components/PermalinkResolver";

/**
 * The Permalink Layout is the main component that loads the necessary
 * components to compile a single self-contained Figure or Table.
 * The backlink is injected and rendered.
 * This loads AppState and injects it into the component itself, to
 * bypass the pages and render components without Header etc.
 *
 */
const Permalink: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/permalink/:component"
          render={() => <PermalinkResolver />}
        />

        {/* A route for missing component values - could also load a nice looking default box */}
        <Route exact path="/permalink">
          <h1>Error. This is not a valid Permalink URL</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Permalink;
