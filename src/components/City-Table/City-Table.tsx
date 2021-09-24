import { useState, useEffect } from "react";
import { connect } from "react-redux";
import sortBy from "lodash.sortby";

import { Paper, Box } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";

import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";
import CityTableCell from "./City-Table-Cell";

// define the HeadCell interface and object array
interface HeadCell {
  id: string;
  label: string;
}

const HEADCELLS: HeadCell[] = [
  { id: "city", label: "City" },
  { id: "walkability", label: "Walkability" },
  { id: "bikeability", label: "Bikeability" },
  { id: "car_integration", label: "Car" },
  { id: "public_transport", label: "Public Transport" },
  { id: "noise_pollution", label: "Noise" },
  { id: "land_use", label: "Landuse" },
  { id: "traffic_safety", label: "Safety" },
  { id: "emissions", label: "Emissions" },
  { id: "cross_border", label: "Border Patrol" },
  { id: "functional_diversity", label: "Functional Diversity" },
  { id: "accessibility", label: "Accessibility" },
  { id: "behavior", label: "Behavior" },
];

interface FlatCityInfo {
  city: string;
  [key: string]: number | string;
}

export interface IndicatorStat {
  min: number;
  max: number;
  median?: number;
  mean?: number;
}

interface IndicatorStats {
  [indicator: string]: IndicatorStat;
}

interface CityTableProps {
  cities: City[];
  debug: boolean;
}

const CityTable: React.FC<CityTableProps> = (props) => {
  // define component state
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("city");
  const [showOption, setShowOption] = useState<"number" | "bar">("bar");

  // transform the cities into the FlatCityInfo interface
  // as the data needs to be handled by state to sort it, we need the
  // useEffect hook to load it only if props changed
  // otherwise it will be reloaded on EVERY click
  const [flatData, setFlatData] = useState<FlatCityInfo[]>([]);
  const [stats, setStats] = useState<IndicatorStats>({});

  useEffect(() => {
    // on component mount sort by city asc
    const transformed = sortBy(transformData(props.cities), (f) => f.city);
    const statistics = indicatorStatistics(transformed);

    // set the data the first and the stats the only time
    setFlatData(transformed);
    setStats(statistics);

    // dev output
    if (props.debug) console.log(`[CityTable] transformData:`, transformed);
    if (props.debug)
      console.log(`[CityTable] indicatorStatistics:`, statistics);
  }, [props]);

  // do the sorting
  const sortHandler = (headerId: string) => {
    // I guess using lodash is the best solution here
    const orderedFlatData = sortBy(flatData, (f) => f[headerId]);

    // check the order direction
    if (order === "desc") orderedFlatData.reverse();

    // update
    setFlatData(orderedFlatData);
  };

  // handle the sort request
  const onSortClick = (clickedId: string) => {
    // check if the current orderby was clicked
    if (clickedId === orderBy) {
      // flip direction
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      // change order by and set to asc
      setOrderBy(clickedId);
      setOrder("asc");
    }

    // all set -> go for sorting
    sortHandler(clickedId);
  };

  return (
    <Box pt={20}>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} size="small">
          {/* HEADER */}
          <TableHead>
            <TableRow>
              {HEADCELLS.map((headcell) => {
                return (
                  <TableCell align={headcell.id === "city" ? "left" : "right"}>
                    <TableSortLabel
                      active={headcell.id === "walkablility"}
                      direction={headcell.id === orderBy ? order : "asc"}
                      onClick={() => onSortClick(headcell.id)}
                    >
                      {headcell.label}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          {/* TABLE BODY */}
          <TableBody>
            {flatData.map((city) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    <strong>{city.city}</strong>
                  </TableCell>
                  {HEADCELLS.slice(1).map((headcell) => {
                    return (
                      <CityTableCell
                        value={Number(city[headcell.id])}
                        showOption={showOption}
                        stats={stats[headcell.id]}
                      />
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const transformData = (cities: City[]): FlatCityInfo[] => {
  return cities.map((city) => {
    const data: any = { city: city.city, id: city.city };
    Object.entries(city.indicators).forEach(([name, indicator]) => {
      data[name] = indicator.value;
    });
    return data;
  });
};

const indicatorStatistics = (flat: FlatCityInfo[]): IndicatorStats => {
  const stats: IndicatorStats = {};

  HEADCELLS.slice(1).forEach((header) => {
    const stat: IndicatorStat = { min: 99, max: 0 };

    // min and max
    stat.min = Number(
      flat
        .map((f) => f[header.id])
        .reduce((prev, cur) => (prev < cur ? prev : cur), 99)
    );
    stat.max = Number(
      flat
        .map((f) => f[header.id])
        .reduce((prev, cur) => (prev > cur ? prev : cur), 0)
    );

    stats[header.id] = stat as IndicatorStat;
  });
  return stats;
};

const mapStateToProps = (state: AppState) => {
  return {
    cities: state.data.cities,
    debug: state.debug,
  };
};

export default connect(mapStateToProps)(CityTable);
