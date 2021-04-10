import { Card, Statistic } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

/**
 * Sample Indicator Card
 * This is just an example how the various self contained components
 * can be composed. This sample will be used for a few performance tests
 * to decide on data flow pattern into the component, as well as state
 * management for the component.
 */
const SampleIndicatorCard: React.FC = () => (
    <Card title="Sample Indicator" extra={<a href="/permalink" target="_blank">Permalink</a>} style={{maxWidth: '400px', width: '100%'}}>
        <Statistic 
            title="Awesomeness"
            value={42}
            valueStyle={{color: '#3f8600'}}
            prefix={<ArrowUpOutlined />}
            suffix="%"
        />
    </Card>
);

export default SampleIndicatorCard