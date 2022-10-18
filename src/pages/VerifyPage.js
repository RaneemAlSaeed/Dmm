import { Box, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
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
import StepperLogo from "../components/StepperLogo";
import img from "../images/Group 2(2).png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../store/registerSlice";
import { postLogin } from "../store/loginSlice";
import { postverify } from "../store/verifySlice";
export default function VerifyPage() {
  const [profile, setProfile] = useState({});
  const [num, setNum] = React.useState(1);

  const verifyState = useSelector((state) => state.verify.verifyData);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const routeChange = (e) => {
    e.preventDefault();

    // if (localStorage.getItem("profile")) {
    //   localStorage.removeItem("profile");
    //   localStorage.setItem("profile", JSON.stringify(profile));

    //   // navigate(path);
    // } else {
    //   localStorage.setItem("profile", JSON.stringify(profile));
    //   // navigate(path);
    // }
    console.log(profile);
    dispatch(postverify(profile));
    console.log("slice", verifyState);
  };
  useEffect(() => {
    let path = `/login`;
    console.log("slicetttttttttt", verifyState);

    if (verifyState.status == "success") {
      navigate(path);
      console.log("slicetttttttttt", verifyState);
    }
    
  }, [verifyState]);

  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
    console.log(profile);
  }

  return (
    <Box
      sx={{ backgroundColor: secColor, display: { xs: "none", md: "block" } }}
    >
      <Box className="header">
        <Header data={headerData} />
      </Box>
      <Box
        className="containerr"
        sx={{
          marginTop: "4.0625vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box className="profile-box">
          <Box sx={{ width: "8.8020833333333vw" }}>
            <StepperLogo
              color={mainColor}
              img={img}
              logoWidth="100%"
              descOneFontSize="1vw"
              discTowfs=" 0.57291666666667vw"
              width="10.8020833333333vw"
            />
          </Box>
          <span
            className="Welcome"
            style={{ color: mainColor, marginTop: "4.7708333333333%" }}
          >
            Welcome to DM mobile
          </span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              marginTop: "3.7395833333333vw",
            }}
            component="form"
            onSubmit={routeChange}
          >
            <label htmlFor="" style={{ color: mainColor, marginTop: "1vw" }}>
              Email:
            </label>
            <input
              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              onChange={handleChange}
              required
              placeholder="somemail@email.com"
              name="email"
              type="email"
              //    pattern="[^ @]*@[^ @]*"
              style={{
                border: " 0.052083333333333vw solid ",
                borderColor: mainColor,
                width: "21.5625vw",
                height: " 2.5vw",
                fontSize: "0.825vw",
              }}
            />
            <label htmlFor="" style={{ color: mainColor, marginTop: "1vw" }}>
              Code:
            </label>
            <input
              type="text"
              name="verify_token"
              maxLength={6}
              minLength={6}
              placeholder="XXX-XXX"
              style={{
                border: " 0.052083333333333vw solid ",
                borderColor: mainColor,
                width: "21.5625vw",
                height: " 2.5vw",
                fontSize: "0.825vw",
              }}
              required
              onChange={handleChange}
            />

            {/* <input type="number" placeholder="YYMMDD" id="myKadA" maxlength="6" style="width:90px !important" onchange="checkMyKad()" size="8"  class="form-control block-centered ic-input" required/>  */}
            {/* <input
              placeholder="someone"
              required
              onChange={handleChange}
              name="password"
              type="n"
              style={{
                border: " 0.052083333333333vw solid ",
                borderColor: mainColor,
                width: "21.5625vw",
                height: " 2.5vw",
                fontSize: "0.825vw",
               
              }}
            /> */}

            <Box
              sx={{
                width: "21.5625vw",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <NavLink to="/profile-1" style={{textDecoration:"none"}}> */}
              <Button
                // onClick={routeChange}
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: mainColor,
                  "&:hover": {
                    backgroundColor: "#eeac85",
                    boxShadow: "none",
                  },
                  "&:active": {
                    boxShadow: "none",
                    backgroundColor: "#eeac85",
                  },
                  fontSize: "0.625vw",
                  fontWeight: 700,
                  textTransform: "capitalize",

                  margin: "2.1354166666667vw auto",
                }}
                className="create-acc-btn"
              >
                verify
              </Button>
              {/* </NavLink> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
