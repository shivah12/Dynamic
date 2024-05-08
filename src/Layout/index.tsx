import { ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        background: "white",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        color: " rgba(77, 149, 212, 0.69)",
        padding: 3,
        gap: 3,
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      <Sidebar />
      <Box sx={{ width: "100%", overflowY: "scroll" }}>{children}</Box>
    </Box>
  );
};

export default Layout;
