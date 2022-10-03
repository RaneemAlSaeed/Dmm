import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { darkMeatColor, mainColor, meatColor } from "../colors";
import { Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: " 0.3125vw",
    marginTop: theme.spacing(1),
    minWidth: "9.375vw",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "0.20833333333333vw 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: "0.825vw",
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
      "&:hover": {
        backgroundColor: "#eeeeee",
        boxShadow: "none",
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    document.body.className = "cls";
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={
          <KeyboardArrowDownIcon
            sx={{
              color: mainColor,
              cursor: "pointer",
              width: "1.1458333333333vw",
              height: "1.1458333333333vw",
            }}
          />
        }
        sx={{
          backgroundColor: meatColor,
          color: mainColor,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: 0,
          "&:hover": {
            backgroundColor: darkMeatColor,
          },
        }}
      >
        <span className="span-category-name" style={{ color: mainColor }}>
          category name
        </span>
        <ExpandMoreIcon
          sx={{
            color: mainColor,
            cursor: "pointer",
            width: "1.5458333333333vw",
            height: "1.5458333333333vw",
            fontSize: "0.725vw",
            fontWeight: 900,
          }}
        />
      </Box>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          disableRipple
          sx={{ fontSize: "0.825vw" }}
        >
          <EditIcon />
          Category
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          disableRipple
          sx={{ fontSize: "0.825vw" }}
        >
          <FileCopyIcon />
          Category
        </MenuItem>
        <Divider sx={{ my: " 0.026041666666667vw" }} />
        <MenuItem
          onClick={handleClose}
          disableRipple
          sx={{ fontSize: "0.825vw" }}
        >
          <ArchiveIcon />
          Category
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          disableRipple
          sx={{ fontSize: "0.825vw" }}
        >
          <MoreHorizIcon />
          Category
        </MenuItem>
      </StyledMenu>
    </Box>
  );
}
