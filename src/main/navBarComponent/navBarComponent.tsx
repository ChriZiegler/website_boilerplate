import { Box, Stack } from "@mui/material";
import React from "react";
import { BLACK } from "../../common/colors";
import { NavButton } from "./navButtonComponent";
import { TwitterIcon } from "./socialMediaButtonComponent";

export function NavBarComponent(props: {}) {
  return (
    <>
      <Box
        style={{
          padding: "15px",
          paddingBottom: "1rem",
          background: BLACK,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <nav>
          <NavButton label="About Us" linkTo="/"></NavButton>
        </nav>
        <Stack direction="row" spacing={2}>
          <TwitterIcon></TwitterIcon>
        </Stack>
      </Box>
    </>
  );
}
