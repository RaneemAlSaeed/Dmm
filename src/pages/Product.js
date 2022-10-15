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
import QuizIcon from '@mui/icons-material/Quiz';
import Header from "../components/Header";
import { headerData } from "../data";
export default function Product() {
  return (
    <Box sx={{ backgroundColor: secColor, width: "100%", height: "100%" }}>
    <div style={{height:"4.0458333333333vw"}}>.</div> 
    <Box
      sx={{ backgroundColor: secColor, display: { xs: "none", md: "block" } }}
    >
      <Box className="header">
        <Header data={headerData} />
      </Box>
      <Box className="containerr" >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <Grid
            item
            md={9.85}
            sx={{ backgroundColor: "white" }}
            className="Product-sec-1"
          >
            <Grid
              container
              direction="row"
              justifyContent="start"
              alignItems="start"
            >
              <Grid item md={7}>
                <VideoComp />
              </Grid>
              <Grid item md={5} sx={{ paddingX: "1vw" }}>
                <SectionTowInProduct />
              </Grid>
            </Grid>

          <LastSectionInProduct/>
          </Grid>
          <Grid item md={2} sx={{marginTop: "2.1354166666667vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"fixed",left:"79.21875vw",top:""}} >
           <QTYBox />
           <DownloadFileButton  text="Download File" icon={PictureAsPdfIcon}  color={Blue}/>
           <DownloadFileButton  text="Ask About this" icon={QuizIcon} color={mainColor} />
          </Grid>
        </Grid>
     <Box sx={{zIndex:-100}}>

      <SimilarProduct/>
     </Box>
       
      </Box>
    </Box>
     </Box>
   
  );
}
