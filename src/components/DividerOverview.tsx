import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const DividerOverview: React.FC = () => {
  return (
    <Box sx={{ height: "300px" }}>
      <Divider textAlign="left">
        <Typography variant="h2">Overview</Typography>
      </Divider>
      <Typography variant="h6" m={10} fontWeight="fontWeightLight">
        Explore how the cities are dealing with the challenges of sustainable
        mobility based on 18 SuMo indicators. The cities are compared against
        the mean of all cities. This results in cities performing better or
        worse the average of the region.
      </Typography>
    </Box>
  );
};

export default DividerOverview;
