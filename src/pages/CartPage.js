import { Box, Grid } from "@mui/material";
import React from "react";
import { Blue, mainColor, secColor } from "../colors";
import ProductsSwiper from "../components/ProductsSlider";
import LastSectionInProduct from "../components/LastSectionInProduct";
import QTYBox from "../components/QTYBox";
import SectionTowInProduct from "../components/SectionTow InProduct";
import SimilarProduct from "../components/SimilarProduct";
import VideoComp from "../components/VideoComp";
import DownloadFileButton from "../components/DownloadFileButton";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import QuizIcon from "@mui/icons-material/Quiz";
import Header from "../components/Header";
import { headerData } from "../data";
import Products from "../components/Products";
import MiniQTYBox from "../components/MiniQTYBox";

export default function CartPage() {
  return (
    <Box sx={{ backgroundColor: secColor, width: "100%", height: "100%" }}>
      <div style={{marginBottom:"3vw"}}>.</div>
      <Box
        sx={{ backgroundColor: secColor, display: { xs: "none", md: "block" } }}
      >
        <Box className="header">
          <Header data={headerData} />
        </Box>
        <Box className="containerr"  sx={{ marginTop: "2.40625vw" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="start"
          >
            <Grid item md={9.85}>
              <Box sx={{ marginTop: "1vw" }}>
                <Products delete={true} />
              </Box>
            </Grid>
            <Grid
              item
              md={2}
              sx={{
                marginTop: "2.1354166666667vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MiniQTYBox />
            </Grid>
          </Grid>

          {/* <SimilarProduct /> */}
        </Box>
      </Box>
    </Box>
  );
}
