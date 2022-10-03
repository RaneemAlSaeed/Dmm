import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Grid } from "@mui/material";
import { smallCartData } from "../data";
import SmallCart from "./SmallCart";

export default function ProductsSwiper() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={7}
        centeredSlides={false}
        spaceBetween={10}
       
        navigation={false}
        modules={[Pagination, Navigation]}
        // className="mySwiper"
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {smallCartData.map((item) => (
            <Grid item md={1.9} sx={{ marginTop: "2.2916666666667vw" }}>
              <SwiperSlide>
                <SmallCart
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                />
              </SwiperSlide>
            </Grid>
          ))}
        </Grid>
      </Swiper>
    </>
  );
}
