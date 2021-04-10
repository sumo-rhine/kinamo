import { PageHeader } from "antd";
import React from "react";

/**
 * The Page component is a slim wrapper around the usual page navigation that
 * actually loads the real pages. This is necssary to route permalink routes
 * outside of this compnent, to finally render the permalink components without
 * Header etc.
 * If a new page is added, put the routing here.
 */
const Page: React.FC = () => (
    <React.Fragment>
        <PageHeader title="Hello from Kinamo" />
        <h1>This is the &lt;Page /&gt; component that routes the actual application</h1>
    </React.Fragment>
)

export default Page;