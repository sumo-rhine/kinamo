import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import all pages that are available at this level
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
            {/* Dev only  - replace with the real pages*/}
            <Route path="/sample" render={() => <SamplePage />} />

            {/* If no other route matched, redirect i.e. to a /home or /dashboard */}
            <Route path="/" render={() => <Redirect to="/sample" />}/>
        </Switch>
    </BrowserRouter>
)

export default Page;