import { connect } from "react-redux";

import { Paper } from "@mui/material";
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";


import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";


// define the HeadCell interface and object array
interface HeadCell {
    id: string;
    label: string;
}


const HEADCELLS: HeadCell[] = [
    { id: 'city', label: 'City' },
    { id: 'walkability', label: 'Walkability' },
    { id: 'bikeability', label: 'Bikeability' },
    { id: 'car_integration', label: 'Car Integration' },
    { id: 'noise_pollution', label: 'Noise Pollution'},
    { id: 'land_use', label: 'Landuse'},
    { id: 'traffic_safety', label: 'Traffic Safety'},
    { id: 'emissions', label: 'Emissions'},
    { id: 'cross_border', label: 'Border Patrol'},
    { id: 'functional_diversity', label: 'Functional Diversity'},
    { id: 'accessibility', label: 'Accessibility'},
    { id: 'behavior', label: 'Behavior'}
];

interface FlatCityInfo {
    city: string;
    [key: string]: number | string;
}


interface CityTableProps {
    cities: City[];
    debug: boolean;
}


const CityTable: React.FC<CityTableProps> = (props) => {
    // transform the cities into the FlatCityInfo interface
    const flat = transformData(props.cities);
    // const headers = getHeaders(flat);

    // dev output
    if (props.debug) console.log(`[CityTable] transformData:`, flat)
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{width: '100%'}} size="small">
                {/* HEADER */}
                <TableHead>
                    <TableRow>
                        { HEADCELLS.map(headcell => {
                            return (
                                <TableCell align={headcell.id === 'city' ? "left": "right"}>{headcell.label}</TableCell>
                            );
                        }) }
                    </TableRow>
                </TableHead>

                {/* TABLE BODY */}
                <TableBody>
                    { flat.map((city => {
                        return (
                            <TableRow>
                                <TableCell component="th" scope="row">{city.city}</TableCell>
                                { HEADCELLS.slice(1).map(headcell => {
                                    return (
                                        <TableCell align="right">{city[headcell.id]}</TableCell>
                                    );
                                }) }
                            </TableRow>
                        );
                    })) }
                </TableBody>
            </Table> 
        </TableContainer>
    );
}


const transformData = (cities: City[]): FlatCityInfo[] => {
    return cities.map(city => {
        const data: any = {city: city.city, id: city.city};
        Object.entries(city.indicators).forEach(([name, indicator]) => {
            data[name] = indicator.value;
        })
        return data
    });
};


// const getHeaders = (flatInfo: FlatCityInfo[]): string[] => {
//     // if there is no data => return empty list
//     if (flatInfo.length === 0) return []

//     // get only the first element
//     const flat = flatInfo[0];

//     // filter for everything but id
//     // TODO: here a more sophisticated model could be built and returned
//     const names: string[] = [];
//     Object.keys(flat).forEach(name => {
//         if (!['id', 'city'].includes(name)) names.push(name)
//         if(name === 'city') names.unshift(name)
//     });

//     return names;
// }


const mapStateToProps = (state: AppState) => {
    return {
        cities: state.data.cities,
        debug: state.debug
    }
};

export default connect(mapStateToProps)(CityTable);