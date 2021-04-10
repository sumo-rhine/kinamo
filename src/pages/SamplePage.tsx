import { PageHeader } from "antd";
import React from "react";

const SamplePage: React.FC = () => (
    <React.Fragment>
        <PageHeader title="Sample Component" />
        <h1>Sample content</h1>
        <h3>Section with child <code>component</code></h3>
    </React.Fragment>
);

export default SamplePage;