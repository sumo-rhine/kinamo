import { PageHeader } from "antd";
import React from "react";
import SampleIndicatorCard from "../components/SampleIndicatorCard";

const SamplePage: React.FC = () => {
    
    return (
    <React.Fragment>
        <PageHeader title="Sample Component" />
        <h1>Sample content</h1>
        <h3>Section with child <code>component</code></h3>
        {/* Here, we would consume a page-wide state or an application wide setting, which city to show */}
        <SampleIndicatorCard city="Karlsruhe"/>
        <SampleIndicatorCard city="Freiburg"/>
    </React.Fragment>
)};

export default SamplePage;