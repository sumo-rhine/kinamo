import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
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
import { getIconPath } from "../IndicatorAndIcon";

const cellRenderer = (params: any) => {
  const width = (params.value / 10) * 100;
  const value = params.value;
  return (
    <Tooltip
      title={
        // <Box>
        <Box
          p={3}
          sx={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Typography variant="h2" fontWeight="fontWeightLight">
            {params.value != null ? params.value.toFixed(1) : ""}
          </Typography>
          <Typography
            pl={0.5}
            pb={0.9}
            variant="h5"
            fontWeight="fontWeightLight"
          >
            VON 10
          </Typography>
        </Box>
      }
    >
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
    </Tooltip>
  );
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
    minWidth: 120,
    headerAlign: "center",
    renderHeader: () => (
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
            src={getIconPath("walkability").IconSrc}
          />
        </Icon>
        <Typography variant="subtitle2" color="text.secondary">
          {"Fußgänger".toUpperCase()}
        </Typography>
      </Box>
    ),
  },
  {
    field: "bikeability",
    headerName: "Fahrrad Freundlichkeit",
    renderCell: cellRenderer,
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    renderHeader: () => (
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
            src={getIconPath("bikeability").IconSrc}
          />
        </Icon>
        <Typography variant="subtitle2" color="text.secondary">
          {"Fahrrad".toUpperCase()}
        </Typography>
      </Box>
    ),
  },
  {
    field: "public_transport",
    headerName: "ÖPNV",
    renderCell: cellRenderer,
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    renderHeader: () => (
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
            src={getIconPath("public_transport").IconSrc}
          />
        </Icon>
        <Typography variant="subtitle2" color="text.secondary">
          {"ÖPNV".toUpperCase()}
        </Typography>
      </Box>
    ),
  },
  {
    field: "car_integration",
    headerName: "Auto",
    renderCell: cellRenderer,
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    renderHeader: () => (
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
            src={getIconPath("car_integration").IconSrc}
          />
        </Icon>
        <Typography variant="subtitle2" color="text.secondary">
          {"auto".toUpperCase()}
        </Typography>
      </Box>
    ),
  },
  {
    field: "functional_diversity",
    headerName: "Angebote",
    renderCell: cellRenderer,
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    renderHeader: () => (
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
            src={getIconPath("functional_diversity").IconSrc}
          />
        </Icon>
        <Typography variant="subtitle2" color="text.secondary">
          {"Angebote".toUpperCase()}
        </Typography>
      </Box>
    ),
  },
  {
    field: "accessibility",
    headerName: "Erreichbarkeit",
    renderCell: cellRenderer,
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    renderHeader: () => (
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
            src={getIconPath("accessibility").IconSrc}
          />
        </Icon>
        <Typography variant="subtitle2" color="text.secondary">
          {"Erreichbarkeit".toUpperCase()}
        </Typography>
      </Box>
    ),
  },
  {
    field: "cross_border",
    headerName: "Regionale Anbindung",
    renderCell: cellRenderer,
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    renderHeader: () => (
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
            src={getIconPath("cross_border").IconSrc}
          />
        </Icon>
        <Typography variant="subtitle2" color="text.secondary">
          {"Anbindung".toUpperCase()}
        </Typography>
      </Box>
    ),
  },
  {
    field: "land_use",
    headerName: "Landnutzung",
    renderCell: cellRenderer,
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    renderHeader: () => (
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
            src={getIconPath("land_use").IconSrc}
          />
        </Icon>
        <Typography variant="subtitle2" color="text.secondary">
          {"Landnutzung".toUpperCase()}
        </Typography>
      </Box>
    ),
  },
  {
    field: "emissions",
    headerName: "Emissionen",
    renderCell: cellRenderer,
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    renderHeader: () => (
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
            src={getIconPath("emissions").IconSrc}
          />
        </Icon>
        <Typography variant="subtitle2" color="text.secondary">
          {"Emissionen".toUpperCase()}
        </Typography>
      </Box>
    ),
  },
  {
    field: "noise_pollution",
    headerName: "Lärm Belastung",
    renderCell: cellRenderer,
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    renderHeader: () => (
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
            src={getIconPath("noise_pollution").IconSrc}
          />
        </Icon>
        <Typography variant="subtitle2" color="text.secondary">
          {"Lärm".toUpperCase()}
        </Typography>
      </Box>
    ),
  },
  {
    field: "traffic_safety",
    headerName: "Verkehrs Sicherheit",
    renderCell: cellRenderer,
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    renderHeader: () => (
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
            src={getIconPath("traffic_safety").IconSrc}
          />
        </Icon>
        <Typography variant="subtitle2" color="text.secondary">
          {"Sicherheit".toUpperCase()}
        </Typography>
      </Box>
    ),
  },
  {
    field: "behavior",
    headerName: "Verkehrs Verhalten",
    renderCell: cellRenderer,
    flex: 1,
    minWidth: 120,
    headerAlign: "center",
    renderHeader: () => (
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
            src={getIconPath("behavior").IconSrc}
          />
        </Icon>
        <Typography variant="subtitle2" color="text.secondary">
          {"Verhalten".toUpperCase()}
        </Typography>
      </Box>
    ),
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
      // mt={4}
      sx={{
        width: "100%",
        // height: 650,
        display: "flex",
        justifyContent: "space-around",
      }}
      height={{ lg: 600, xl: 730 }}
    >
      <DataGrid
        sortingOrder={["desc", "asc"]}
        // columnThreshold={20}
        headerHeight={100}
        // headerWidth={200}
        disableColumnSelector={true}
        disableColumnMenu={true}
        hideFooter={true}
        // hideFooterPagination={true}
        columns={columns}
        rows={rows}
        //TODO #115 pinnedColumns={{ left: ["city"] }}
        // #
        //
        // initialState={{ pinnedColumns: { left: "city" } }}
      />
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
