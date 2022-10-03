import React from 'react'
import  { useState } from "react";
// import "./styles.css";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
  Typography
} from "@material-ui/core";
import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home
} from "@material-ui/icons";
import { Gray } from '../colors';
import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useSelector, useDispatch } from 'react-redux'
import { openSideBar, closeSideBar } from '../store/sideBarSlice'
const useStyles = makeStyles((theme) => ({
    menuSliderContainer: {
      width: "18vw",
      background: "white",
      height: "100%"
    },
   
    listItem: {
      color: Gray
    },
    listItemRed: {
        color: Gray,
        paddingLeft:"2.50833333333333vw",
        "&:hover": {
            width:"100%",
            // backgroundColor: "red",
            // boxShadow: "none",
          },
      },
     

  }));

export default function CategoryDropdownList() {
    const [openSub, setOpenSub] = React.useState(false);

    const handleClick = () => {
        setOpenSub(!openSub);
      };
      const sideBarState = useSelector((state) => state.sideBarState.sideBarState)
      const dispatch = useDispatch()
      const classes = useStyles();

  return (
    <List>
 
    
    <ListItem className={classes.listItem} button  onClick={handleClick}>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="Category" />
    {openSub ? <ExpandLess />: <ExpandMore /> }
  </ListItem>
  <Collapse in={openSub} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      <ListItemButton className={classes.listItemRed} onClick={()=>dispatch(closeSideBar())}>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="sub category" />
      </ListItemButton>
    </List>
  </Collapse>



  
  </List>
  )
}
