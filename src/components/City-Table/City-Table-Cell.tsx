import TableCell from "@mui/material/TableCell";
import { IndicatorStat } from "./City-Table";

interface CityTableCellProps {
    value: number;
    showOption: "number" | "bar";
    stats: IndicatorStat;
    align?: "left" | "right" | "center";
}

const CityTableCell: React.FC<CityTableCellProps> = (props) => {
    let cell: any;
    switch (props.showOption) {
        case 'bar':
            const width =  (props.value - props.stats.min) / (props.stats.max - props.stats.min) * 100
            cell = (
                <div style={{width: '100%', height: '0.9rem'}}>
                        <div style={{
                            backgroundColor: 'green',
                            height: '100%',
                            width: `${width.toFixed(0)}%`,
                            borderRadius: '.3rem'
                        }}>
                        </div>
                    </div>
            );
            break;
    
        default:
            cell = props.value.toFixed(1);
            break;
    }
    return (
        <TableCell align={props.align ? props.align : "right"}>
            { cell }
        </TableCell>
    )
}

export default CityTableCell;