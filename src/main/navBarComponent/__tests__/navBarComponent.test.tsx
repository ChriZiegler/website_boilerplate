import { render, screen } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { NavBarComponent } from "../navBarComponent";
import userEvent from "@testing-library/user-event";

describe("<NavBarComponent/>", () => {
  describe("Initial Render", () => {
    it("renders the nav bar buttons", () => {
      const history = createMemoryHistory({ initialEntries: ["/"] });
      render(
        <Router location={history.location} navigator={history}>
          <NavBarComponent></NavBarComponent>
        </Router>
      );
      expect(screen.queryByText("Contact")).toBeTruthy();
      expect(screen.queryByText("Kickstarter")).toBeTruthy();
    });
    it("renders social media icons", () => {
      const history = createMemoryHistory({ initialEntries: ["/"] });
      render(
        <Router location={history.location} navigator={history}>
          <NavBarComponent></NavBarComponent>
        </Router>
      );
      expect(screen.getByAltText("Link to twitter")).toBeTruthy();
    });
  });

  describe("Clicking on buttons to change route", () => {
    it("navigates to correct paths", () => {
      const history = createMemoryHistory({ initialEntries: ["/"] });
      render(
        <Router location={history.location} navigator={history}>
          <NavBarComponent></NavBarComponent>
        </Router>
      );
      expect(history.location.pathname).toBe("/");
      userEvent.click(screen.getByText("Contact"));
      expect(history.location.pathname).toBe("/contact");
      userEvent.click(screen.getByText("About Us"));
      expect(history.location.pathname).toBe("/");
      userEvent.click(screen.getByText("Kickstarter"));
      expect(history.location.pathname).toBe("/kickstarter");
    });
  });
});
