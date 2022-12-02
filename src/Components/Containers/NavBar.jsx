import React from "react";
import logo from "../../Assets/logo.jpg";
import { NAV_BAR, NAV_LINKS } from "../../Config/Constants";
import { COLORS } from "../../Config/Palette";
import { Typography } from "../Common/Typography";
import { List } from "../Common/List";
import { ListItem } from "../Common/ListItem";
import { StyledLink, NavStyle } from "../Common/NavBar.style";
import { styled } from "@mui/material";

const StyledHeader = styled("header")(({ theme }) => ({
  backgroundColor: "black",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
const StyledHeaderContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  paddingBottom: "20px",

  "& img": {
    width: "50px",
    height: "50px",
    marginTop: "20px",
  },
}));
export const NavBar = () => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <img src={logo} alt="Logo" />
        <NavStyle style={{ marginLeft: "30px" }} variant="h3">
          {NAV_BAR.Title}
        </NavStyle>
        {NAV_LINKS.map((data) => (
          <List>
            <ListItem>
              <StyledLink to={data.path}>{data.label}</StyledLink>
            </ListItem>
          </List>
        ))}
      </StyledHeaderContent>
      <div>
        <Typography
          sx={{
            color: COLORS.NAV_BAR_FONT,
            "font-weight": 200,
            "font-size": "20px",
          }}
        >
          React MUI-Project 3
        </Typography>
      </div>
    </StyledHeader>
  );
};
