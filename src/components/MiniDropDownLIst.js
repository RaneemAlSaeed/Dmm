import * as React from "react";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Gray, mainColor } from "../colors";
import Divider from "@mui/material/Divider";
import { handleExpanded } from "../store/expanded";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MiniDropsdownList(props) {
  const [expanded, setExpanded] = React.useState(false);
  const expandedState = useSelector((state) => state.expanded.expandedState);
  const dispatch = useDispatch();
  const handleExpandClick = () => {
    setExpanded(!expanded);

    dispatch(handleExpanded());
    console.log(expandedState);
  };

  return (
    <Box
      sx={{ position: "relative" }}
      className={props.index == 0 ? "mini-dashboard" : ""}
    >
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Grid item md={6}>
            <span style={{ fontSize: "0.625vw", fontWeight: 700, color: Gray }}>
              Sub Category Name
            </span>
          </Grid>
          <Grid
            item
            md={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item md={5}>
              {" "}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon sx={{ fontSize: "1.2vw" }} />
              </ExpandMore>
            </Grid>
          </Grid>
        </Grid>

        {/* <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse> */}
      </Box>
      {props.last == false && (
        <Divider sx={{ position: "absolute", width: "100%", left: 0 }} />
      )}
    </Box>
  );
}
