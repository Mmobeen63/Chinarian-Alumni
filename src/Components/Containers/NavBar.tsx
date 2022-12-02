import * as React from "react";
import logo from "../../Assets/Group.png"
import { NAV_LINKS,SIGNED_IN_NAV_LINKS } from "../../Config/Constants";
import {  WHITE } from "../../Config/Palette";
import { List } from "../Common/List";
import { ListItem } from "../Common/ListItem";
import { styled } from "@mui/material";
import { StyledLink } from "../Common/NavBar.style";
import { useSelector } from "react-redux";

const StyledHeader = styled("header")(({ theme }) => ({
  backgroundColor: WHITE,
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-Between",
  boxShadow:"-1px 2px 5px 0px rgba(0,0,0,0.25)"

}));
const StyledHeaderContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection:"row",
  alignItems: "flex-end",
  alignSelf:"flex-start",
  paddingBottom: "20px",
  justifyContent: "space-around",
  "& img": {
    width: "50px",
    height: "50px",
    margin: "20px 0px 0px 75px",
  },"& ul":{
   display:"flex",
   flexDirection:"row",
  }
  
}));


export const NavBar = () => {
  const currentUser= useSelector((state:any)=>state.authInfo.userInfo);
  const {accessToken}= currentUser
  const loginStatus = accessToken;
  return (
    <StyledHeader>
      <StyledHeaderContent>
        {<img src={logo} alt="Logo" />}
    {loginStatus=== undefined ? NAV_LINKS.map((data) => (
          <List>
            <ListItem>
              <StyledLink to={data.path}>{data.label}</StyledLink>
            </ListItem>
          </List>
        )):SIGNED_IN_NAV_LINKS.map((data) => (
          <List>
            <ListItem>
              <StyledLink to={data.path}>{data.label}</StyledLink>
            </ListItem>
          </List>
        ))}
      </StyledHeaderContent>
    </StyledHeader>
  );
};
