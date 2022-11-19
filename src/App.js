import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import MiniDrawer from "./components/Drawer";
import Dashboard from "./routes/dashboard";
import Shortenert from "./routes/shortenert";
import Short from "./routes/short";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="shortenert" element={<Shortenert />} />
        <Route path="short" element={<Short />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}

export default App;