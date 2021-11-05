import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Button, Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DataGrid, GridRowProps, GridColDef, GridRenderCellParams, GridColumnHeaderParams } from "@mui/x-data-grid"
import { HashLink } from "react-router-hash-link"

import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";

const cellBarRenderer = (params: GridRenderCellParams) => {
  return (
    <Tooltip title={
      <Box p={3} sx={{display: "flex", alignItems: "flex-end"}}>
        <Typography variant="h2" fontWeight="fontWeightLight">
          {params.value ? params.value.toFixed(1) : '-'}
        </Typography>
        <Typography pl={0.5} pb={0.9} variant="h5" fontWeight="fontWeightLight"> 
          VON 10
        </Typography>
      </Box>
    }>
      <Box sx={{width: '100%', height: '33%'}}>
        <Box sx={{width: '100%', height: '100%', backgroundColor: '#C4C4C4'}}>
          <Box sx={{
            width: `${params.value * 10}%`,
            height: '100%',
            backgroundColor: params.value < 2.5 ? '#C26A4A' : params.value > 7.5 ? '#8BC34A' : '#4AC29A'
          }} />
        </Box>
      </Box>
    </Tooltip>
  );
}

const cityCellRenderer = (params: GridRenderCellParams) => {
  // TODO: put the button here
  return <Button size="small" component={HashLink} to={`/city/${params.id}#top`}>{params.formattedValue}</Button>
}

const renderButtonHeader = (params: GridColumnHeaderParams) => {
  return <Button size="small" component={HashLink} to="#about" smooth={true}>{params.field}</Button>
}

const COL = {
  minWidth: 150,
  filterable: false
};
const DATACOL = {
  ...COL,
  renderCell: cellBarRenderer,
  renderHeader: renderButtonHeader
};

const columns: GridColDef[] = [
  { field: "city", headerName: "Kommune", ...COL, renderCell: cityCellRenderer },
  { field: "walkability", headerName: "Fußgänger Freundlichkeit", ...DATACOL},
  { field: "bikeability", headerName: "Fahrrad Freundlichkeit", ...DATACOL },
  { field: "public_transport", headerName: "ÖPNV", ...DATACOL  },
  { field: "car_integration", headerName: "Auto", ...DATACOL  },
  { field: "functional_diversity", headerName: "Raum Struktur", ...DATACOL  },
  { field: "accessibility", headerName: "Erreichbarkeit",...DATACOL  },
  { field: "cross_border", headerName: "Regionale Anbindung", ...DATACOL },
  { field: "land_use", headerName: "Landnutzung", ...DATACOL },
  { field: "emissions", headerName: "Emissionen", ...DATACOL },
  { field: "noise_pollution", headerName: "Lärm Belastung", ...DATACOL },
  { field: "traffic_safety", headerName: "Verkehrs Sicherheit", ...DATACOL },
  { field: "behavior", headerName: "Verkehrs Verhalten", ...DATACOL },  
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

const CityTable: React.FC<CityTableProps> = (props) => {
  // create a state for the rows
  const [rows, setRows] = useState<GridRowProps[]>([]);

  useEffect(() => {
    const newRows: GridRowProps[] = transformData(props.cities);
    setRows(newRows);
  }, [props]);
  
  return (
    <Box sx={{width: '100%'}}>
      <DataGrid 
        autoHeight
        columns={columns} 
        rows={rows}

       />
    </Box>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    cities: state.data.cities,
    debug: state.debug,
  };
};

export default connect(mapStateToProps)(CityTable);
