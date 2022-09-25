import * as React from "react";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Gray, mainColor } from "../colors";
import Divider from "@mui/material/Divider";
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

export default function DropsdownList() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Grid item md={6}>
            <span className="text" style={{ fontWeight: 700, color: Gray }}>
              Headphones
            </span>
          </Grid>
          <Grid
            item
            md={6}
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
                <ExpandMoreIcon sx={{fontSize:"1.2vw"}}/>
              </ExpandMore>
            </Grid>
            <Grid item md={2}>
              <Checkbox
                {...label}
                // defaultChecked
                sx={{
                  color: mainColor,
                  "&.Mui-checked": {
                    color: mainColor,
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: " 1.2vw",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            {Array.from(Array(3)).map((item) => (
              <>
                <Grid
                  item
                  md={6}
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <span
                    className="text"
                    style={{
                      fontWeight: 400,
                      color: Gray,
                      fontFamily: "Montserrat",
                    }}
                  >
                    Headphones
                  </span>
                </Grid>

                <Grid
                  item
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item md={5}></Grid>
                  <Grid item md={2}>
                    <Checkbox
                      {...label}
                 
                      sx={{
                        color: mainColor,
                        "&.Mui-checked": {
                          color: mainColor,
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: " 1vw",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </>
            ))}
          </Grid>
        </Collapse>
      </Box>
      <Divider sx={{ position: "absolute", width: "100%", left: 0 }} />
    </Box>
  );
}
