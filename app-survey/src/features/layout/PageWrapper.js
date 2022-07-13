import Box from "@mui/material/Box";
import Image from "../auth/Img.jpg";

export const PageWrapper = (props) => (
  <Box
    {...props}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      height: "100vh",
      backgroundImage: `url(${Image})`,
      backgroundSize: "cover",
      border: "1px solid white",
      borderColor: "primary.light",
      overflow: "scroll",
      pt: 2,
      pb: 2
    }}
  />
);
