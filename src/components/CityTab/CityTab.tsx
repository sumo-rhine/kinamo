/* tslint:disable */

import { City } from "../../models/FullDataset";
import { connect } from "react-redux";
import { AppState } from "../../models/AppState";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

interface CityTabProps {
  city: City[] | undefined;
}
const CityTab: React.FC<CityTabProps> = () => {
  return <p>test</p>;
};

const mapStateToProps = (state: AppState) => {
  return {
    cities: state.data.cities,
    debug: state.debug,
  };
};
export default connect(mapStateToProps)(CityTab);
