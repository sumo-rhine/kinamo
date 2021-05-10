import { Card, Statistic } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

import LinkBuilder from "./LinkBuilder";
import { LinkableProps } from "../share-links";
import {
  AnyIndicator,
  FullDataset,
  MainIndicators,
} from "../models/FullDataset";
import { AppState } from "../models/AppState";

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
const SampleIndicatorCard: React.FC<SampleIndicatorCardProps> = (props) => {
  // get correct city - not sure what to do if undefined
  const city = props.data.cities.find((c) => c.name === props.city);

  // second, we ask for the correct indicator.
  // It might be a good strategy to implement the elements not at that level
  // of abstraction, but rather for a specified indicator.
  // that's more programming work, but easier and maybe less error prone
  let indicator: AnyIndicator | undefined;
  if (city && props.indicator?.includes(".")) {
    // This is the only way I can think of handling strong typed indicators at an abstract level
    const idx = props.indicator.split(".")[0] as keyof MainIndicators;
    const main = city.indicators[idx];
    const subIdx = props.indicator.split(
      "."
    )[1] as keyof typeof main.subIndicators;
    indicator = main.subIndicators[subIdx];
  } else if (city) {
    indicator = city.indicators[props.indicator as keyof MainIndicators];
  } else {
    indicator = undefined;
  }
  if (!city || !indicator) {
    return (
      <Card title="Not Found" style={{ maxWidth: "400px", width: "100%" }}>
        <i>Please report to the developers as this should not be readable</i>
      </Card>
    );
  }

  // here, city and indicator are loaded
  return (
    <Card
      title={indicator.name}
      extra={
        <LinkBuilder
          componentName="sample"
          appRoute="/sample"
          params={{ city: props.city, indicator: props.indicator }}
        />
      }
      style={{ maxWidth: "400px", width: "100%" }}
    >
      <p>{indicator.description}</p>
      <Statistic
        title={`${indicator.name} in ${city.name}`}
        value={indicator.value}
        valueStyle={{ color: "#3f8600" }}
        prefix={<ArrowUpOutlined />}
        suffix={indicator.unit}
      />
    </Card>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(SampleIndicatorCard);
