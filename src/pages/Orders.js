import { Box, Grid } from "@mui/material";
import React from "react";
import { Blue, Green, mainColor, secColor } from "../colors";
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
import Form from "../components/Form";
import CustomizedTables from "../components/Tabel";

export default function Orders() {
  return (
    <Box sx={{ backgroundColor: secColor, width: "100%", height: "100%" ,zIndex:10}}>
    <div style={{height:"4.0458333333333vw"}}>.</div> 
    <Box
      sx={{ backgroundColor: secColor, display: { xs: "none", md: "block" } }}
    >
      <Box className="header">
        <Header data={headerData} />
      </Box>
      <Box className="containerr">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="start"
          sx={{marginTop:"2vw"}}
        >
          <Form/>
          <Box sx={{width:"42.291666666667vw",position:"absolute",left:"33.729166666667vw"}} >
            <CustomizedTables/>
          </Box>
          <Box sx={{marginTop:"1vw"}} >
            <MiniQTYBox bgColor={Green} text="Submit Order" submit={true}/>
          </Box>
        </Grid>
      </Box>
    </Box>
    </Box>
  
  );
}
