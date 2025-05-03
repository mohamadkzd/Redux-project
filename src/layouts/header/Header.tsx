import { Box } from "@mui/material";
import Navigation from "./components/Navigation/Navigation";

const Header = () => {
  return (
    <header className="containerG bg-gray-300 py-5">
      <Box className="flex justify-around items-center ">
        <Navigation />
        <Box>Logo</Box>
      </Box>
    </header>
  );
};

export default Header;
