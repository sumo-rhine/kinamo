import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const DividerOverview: React.FC = () => {
  return (
    <Box>
      <Divider textAlign="left">
        <Typography variant="h2">Overview</Typography>
      </Divider>
    </Box>
  );
};

export default DividerOverview;
