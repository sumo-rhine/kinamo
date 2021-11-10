import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import sortBy from "lodash.sortby";
import CityTableCell from "./City-Table-Cell";
import Toolbar from "@mui/material/Toolbar";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { Box } from "@mui/system";
import { HashLink } from "react-router-hash-link";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import {
  DataGrid,
  GridRowProps,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";

import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";
//import CityTableCell from "./City-Table-Cell";
import { Link } from "react-router-dom";
import { getIconPath } from "../IndicatorAndIcon";

const cellRenderer = (params: GridRenderCellParams) => {
  const width = (params.value / 10) * 100;
  return (
    // <Tooltip
    //   title={
    //     // <Box>
    //     <Box
    //       p={3}
    //       sx={{
    //         display: "flex",
    //         alignItems: "flex-end",
    //       }}
    //     >
    //       <Typography variant="h2" fontWeight="fontWeightLight">
    //         {params.value.toFixed(1)}
    //       </Typography>
    //       <Typography
    //         pl={0.5}
    //         pb={0.9}
    //         variant="h5"
    //         fontWeight="fontWeightLight"
    //       >
    //         VON 10
    //       </Typography>
    //     </Box>
    //   }
    // >
    <div
      style={{
        width: "100%",
        height: "0.6rem",
        backgroundColor: "#C4C4C4",
        // boxShadow: "0 1px 2px silver",
        //   borderRadius: ".3rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#8BC34A",
          // width < 25 ? "#C26A4A" : width > 75 ? "#8BC34A" : "#4AC29A",
          height: "100%",
          width: `${width.toFixed(0)}%`,
          // borderRadius: '.3rem'
        }}
      ></div>
    </div>
    // </Tooltip>
  );

  //   <h4>{params.value}</h4>;
};

const cityCellRenderer = (params: GridRenderCellParams) => {
  // TODO: put the button here
  return (
    <Button
      sx={{
        width: 200,
        borderRadius: 0,
        justifyContent: "flex-start",
      }}
      size="small"
      // variant="outlined"
      // component={Link}
      component={HashLink}
      to={`/city/${params.id}#top`}
      // to={`/city/${city.ID}`}
    >
      {params.formattedValue}
    </Button>
    // <Button onClick={() => alert(`${params.value} of ID ${params.id} clicked`)}>
    //   {params.formattedValue}
    // </Button>
  );
};

const columns: GridColDef[] = [
  {
    field: "city",
    headerName: "Kommune",
    renderCell: cityCellRenderer,
    flex: 1.5,
  },
  {
    field: "walkability",
    headerName: "Fußgänger Freundlichkeit",
    renderCell: cellRenderer,
    flex: 1,
  },
  {
    field: "bikeability",
    headerName: "Fahrrad Freundlichkeit",
    renderCell: cellRenderer,
    flex: 1,
  },
  {
    field: "public_transport",
    headerName: "ÖPNV",
    renderCell: cellRenderer,
    flex: 1,
  },
  {
    field: "car_integration",
    headerName: "Auto",
    renderCell: cellRenderer,
    flex: 1,
  },
  {
    field: "functional_diversity",
    headerName: "Raum Struktur",
    renderCell: cellRenderer,
    flex: 1,
  },
  {
    field: "accessibility",
    headerName: "Erreichbarkeit",
    renderCell: cellRenderer,
    flex: 1,
  },
  {
    field: "cross_border",
    headerName: "Regionale Anbindung",
    renderCell: cellRenderer,
    flex: 1,
  },
  {
    field: "land_use",
    headerName: "Landnutzung",
    renderCell: cellRenderer,
    flex: 1,
  },
  {
    field: "emissions",
    headerName: "Emissionen",
    renderCell: cellRenderer,
    flex: 1,
  },
  {
    field: "noise_pollution",
    headerName: "Lärm Belastung",
    renderCell: cellRenderer,
    flex: 1,
  },
  {
    field: "traffic_safety",
    headerName: "Verkehrs Sicherheit",
    renderCell: cellRenderer,
    flex: 1,
  },
  {
    field: "behavior",
    headerName: "Verkehrs Verhalten",
    renderCell: cellRenderer,
    flex: 1,
  },
];

const transformData = (cities: City[]): GridRowProps[] => {
  return cities.map((city) => {
    const data: any = { id: city.id, city: city.city };
    Object.entries(city.indicators).forEach(([name, indicator]) => {
      data[name] = indicator.value;
    });
    return data;
  });
};

interface CityTableProps {
  cities: City[];
  debug: boolean;
}

const XCityTable: React.FC<CityTableProps> = (props) => {
  // create a state for the rows
  const [rows, setRows] = useState<GridRowProps[]>([]);

  useEffect(() => {
    const newRows: GridRowProps[] = transformData(props.cities);
    setRows(newRows);
  }, [props]);

  return (
    <Box
      sx={{
        width: "100%",
        height: 700,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <DataGrid columns={columns} rows={rows} />
    </Box>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    cities: state.data.cities,
    debug: state.debug,
  };
};

export default connect(mapStateToProps)(XCityTable);
