import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import sortBy from "lodash.sortby";

import { Switch, FormControlLabel } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";

import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";
import CityTableCell from "./City-Table-Cell";
import { Link } from "react-router-dom";
import { getIconPath } from "../IndicatorAndIcon";
// define the HeadCell interface and object array
interface HeadCell {
  id: string;
  label: string;
}

const HEADCELLS: HeadCell[] = [
  { id: "city", label: "Kommune" },
  { id: "walkability", label: "Fußgänger Freundlichkeit" },
  { id: "bikeability", label: "Fahrrad Freundlichkeit" },
  { id: "public_transport", label: "ÖPNV" },
  { id: "car_integration", label: "Auto" },
  { id: "functional_diversity", label: "Raum Struktur" },
  { id: "accessibility", label: "Erreichbarkeit" },
  { id: "cross_border", label: "Regionale Anbindung" },
  { id: "land_use", label: "Landnutzung" },
  { id: "emissions", label: "Emissionen" },
  { id: "noise_pollution", label: "Lärm Belastung" },
  { id: "traffic_safety", label: "Verkehrs Sicherheit" },
  { id: "behavior", label: "Verkehrs Verhalten" },
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
    <React.Fragment>
      <Box sx={{ width: "100%", margin: "auto" }}>
        <TableContainer>
          <Toolbar
            sx={{ pl: "2rem", display: "flex", justifyContent: "flex-end" }}
          >
            {/* <Typography
              variant="h5"
              fontWeight="fontWeightLight"
              component="div"
              sx={{ flex: "1 1 100%" }}
            >
              Overview of Cities
            </Typography> */}
            {/* <Tooltip
              title={
                showOption === "number"
                  ? "Switch to barplots"
                  : "Switch to numbers"
              }
            >
              <FormControlLabel
                control={
                  <Switch
                    size="medium"
                    color="success"
                    onChange={(e) =>
                      setShowOption(e.target.checked ? "number" : "bar")
                    }
                  />
                }
                label="Layout"
              />
            </Tooltip> */}
          </Toolbar>
          <Table
            sx={{ width: "100%", tableLayout: "fixed" }}
            stickyHeader={true}
            size="small"
          >
            {/* HEADER */}
            <TableHead
              sx={{
                "& .MuiTableCell-head": {
                  fontWeight: 400,
                },
              }}
            >
              <TableRow sx={{ height: 30 }}>
                {HEADCELLS.map((headcell) => {
                  return (
                    <TableCell
                      key={headcell.id}
                      align={headcell.id === "city" ? "left" : "center"}
                      width={headcell.id === "city" ? "10%" : "6%"}
                    >
                      <TableSortLabel
                        active={headcell.id === "walkablility"}
                        direction={headcell.id === orderBy ? order : "asc"}
                        onClick={() => onSortClick(headcell.id)}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <Icon style={{ fontSize: 25 }}>
                            <img
                              style={{
                                height: "80%",
                                opacity: 0.8,
                              }}
                              alt="img"
                              src={getIconPath(headcell.id).IconSrc}
                            />
                          </Icon>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            {headcell.label.toUpperCase()}
                          </Typography>
                        </Box>
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
                  <TableRow key={city.city} sx={{ height: "3px" }}>
                    <TableCell component="th" scope="row">
                      <Button
                        sx={{
                          width: 200,
                          borderRadius: 0,
                          justifyContent: "flex-start",
                        }}
                        size="small"
                        // variant="outlined"
                        component={Link}
                        to={`/city/${city.ID}`}
                      >
                        {city.city}
                      </Button>
                    </TableCell>
                    {HEADCELLS.slice(1).map((headcell) => {
                      return (
                        <CityTableCell
                          key={headcell.id}
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
    </React.Fragment>
  );
};

const transformData = (cities: City[]): FlatCityInfo[] => {
  return cities.map((city) => {
    const data: any = { city: city.city, id: city.city, ID: city.id };
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
