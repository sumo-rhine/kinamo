import { Box } from "@mui/system";
interface KeyFigureBarProps {
  points: number | undefined;
}
const KeyFigureBar: React.FC<KeyFigureBarProps> = (props) => {
  console.log(props);
  return (
    <Box
      style={{
        width: "100%",
        height: "0.6rem",
        backgroundColor: "#C4C4C4",
      }}
    >
      <Box
        style={{
          backgroundColor: "#8BC34A",
          height: "100%",
          width: `${(props.points! / 36) * 100}%`,
          // borderRadius: '.3rem'
        }}
      >
        {props.points}
      </Box>
    </Box>
  );
};

export default KeyFigureBar;
