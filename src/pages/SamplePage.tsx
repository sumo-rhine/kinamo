import { PageHeader } from "antd";
import React from "react";
import SampleIndicatorCard from "../components/SampleIndicatorCard";

// dev only
import * as analytics from '../analytics';

const SamplePage: React.FC = () => {
    // TODO: DEVELOPMENT ONLY - use a cusotm route to implement this behavior
    analytics.pageview('Sample Page');
    
    return (
    <React.Fragment>
        <PageHeader title="Sample Component" />
        <h1>Sample content</h1>
        <h3>Section with child <code>component</code></h3>
        <SampleIndicatorCard />
    </React.Fragment>
)};

export default SamplePage;