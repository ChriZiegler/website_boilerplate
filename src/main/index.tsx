import React from "react";
import TopBannerComponent from "./topBannerComponent/topBannerComponent";
import { Outlet, Link } from "react-router-dom";
import { NavBarComponent } from "./navBarComponent/navBarComponent";
import { Box } from "@mui/system";
import { mainStyle } from "./mainStyle";
import { FooterComponent } from "./footerComponent";
import { TEXT_BACKGROUND } from "../common/colors";

export function MainComponent(props: {}) {
  return (
    <div style={mainStyle}>
      <div>
        <TopBannerComponent></TopBannerComponent>
        <NavBarComponent></NavBarComponent>
      </div>
      <Box
        sx={{
          margin: "15px",
          padding: "15px",
          backgroundColor: TEXT_BACKGROUND,
          flexGrow: 1,
        }}
      >
        <Outlet></Outlet>
      </Box>
      <FooterComponent></FooterComponent>
    </div>
  );
}
