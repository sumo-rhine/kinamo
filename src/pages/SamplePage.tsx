import { Col, PageHeader, Row } from "antd";
import React from "react";
import SampleIndicatorCard from "../components/SampleIndicatorCard";

const SamplePage: React.FC = () => {
    
    return (
    <React.Fragment>
        <PageHeader title="Sample Component" />
        <h1>Sample content</h1>
        <h3>Section with child <code>component</code></h3>
        
        {/* Here, we would consume a page-wide state or an application wide setting, which city to show */}
        <Row gutter={16}>
            
            <Col className="gutter-row" span={24} md={12} lg={6}>
                <SampleIndicatorCard city="Freiburg im Breisgau" indicator="pedestrian" />
            </Col>
            
            <Col className="gutter-row" span={24} md={12} lg={6}>
                <SampleIndicatorCard city="Freiburg im Breisgau" indicator="pedestrian.shareGreen" />  
            </Col>
            
            <Col className="gutter-row" span={24} md={12} lg={6}>
                <SampleIndicatorCard city="Freiburg im Breisgau" indicator="pedestrian.carFreeArea" />
            </Col>

            <Col className="gutter-row" span={24} md={12} lg={6}>
                <SampleIndicatorCard city="Freiburg im Breisgau" indicator="pedestrian.NotAnIndex" />
            </Col>

        </Row>
        

    </React.Fragment>
)};

export default SamplePage;