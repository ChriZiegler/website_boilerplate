import React from "react";
import { topBannerStyle, bannerTextStyle } from "./topBannerStyle";

function TopBannerComponent() {
  return (
    <>
      <div style={topBannerStyle}>
        <h1 style={bannerTextStyle}>My Cool Website</h1>
      </div>
    </>
  );
}

export default TopBannerComponent;
