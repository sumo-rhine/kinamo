import { Card, Statistic } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

import LinkBuilder from "./LinkBuilder";
import { LinkableProps } from '../share-links';
import { FullDataset } from "../models/FullDataset";
import { AppState } from "../models/AppState";
import { connect } from "react-redux";

interface SampleIndicatorCardProps extends LinkableProps {
    data: FullDataset;
}
/**
 * Sample Indicator Card
 * This is just an example how the various self contained components
 * can be composed. This sample will be used for a few performance tests
 * to decide on data flow pattern into the component, as well as state
 * management for the component.
 */
const SampleIndicatorCard: React.FC<SampleIndicatorCardProps> = props => {
    // get correct city - not sure what to do if undefined
    let city = props.data.cities.find(c => c.name === props.city);
    if (!city) {
        // This is bad - no idea how to handle
        city = {name: 'Testing', indicator: 42};
    }
    return (
        <Card 
            title="Sample Indicator" 
            extra={<LinkBuilder componentName="sample" appRoute="/sample" params={{city: props.city}} />} 
            style={{maxWidth: '400px', width: '100%'}}
        >
            <Statistic 
                title={`Awesomeness in ${city.name}`}
                value={city.indicator}
                valueStyle={{color: '#3f8600'}}
                prefix={<ArrowUpOutlined />}
                suffix="%"
            />
        </Card>
    );
}

const mapStateToProps = (state: AppState) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(SampleIndicatorCard);