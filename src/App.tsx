// import React from 'react'
// import Register from './components/Register'
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./index.css";
import { Box, Button, TextField, Typography, } from "@mui/material";
import { useEffect, useState } from "react";
// import ChooesSector from './components/ChooesSector'
// import QuestPage from './components/QuestPage'
import { createTheme, ThemeProvider } from '@mui/material/styles';
type Props = {};

function App({}: Props) {
  const THEME = createTheme({
    typography: {
     "fontFamily": "Kanit",
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
    }
 });
  return (
    <>
     <ThemeProvider theme={THEME}>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/other" element={<Other />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     </ThemeProvider>
      
    </>
  );
}

let maxWidth = 430;
const calHeight = (params: number) => (window.innerHeight * params) / 100;

const calWidth = (params: number) =>
  window.innerWidth > maxWidth
    ? (maxWidth * params) / 100
    : (window.innerWidth * params) / 100;

    let dataSet = {
      name: "",
      phone: "",
      address: "",
    };

const Home = () => {
  const navigate = useNavigate();
  const [regisData, setRegisData] = useState(dataSet);
  const submitRegister = () => {
    navigate(`/other`, { state: { id: "params" } });
  };
  return (
    <div>
      <div style={{textAlign:'center'}}>
        <Typography variant="h3">ลงทะเบียน</Typography>
        <Typography>เพื่อรับสิทธิ์เข้าร่วมกิจกรรม</Typography>
        <Box mx={3}>
          <TextField fullWidth label={"ชื่อ - นามสกุล"} margin="normal" />
          <TextField fullWidth label={"เบอร์โทรศัพท์"} margin="normal" />
          <TextField
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type={"email"}
            autoComplete="email"
            margin="normal"
          />
          <br />

          <Button fullWidth variant="contained" onClick={() => submitRegister()} sx={{mt:3}}>
            Submit
          </Button>
        </Box>
      </div>
    </div>
  );
};

const Other = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <div>
      <div className="map">
        <div className="zone4" style={{ padding: 100 }}>
          <div
            style={{
              left: calWidth(0),
              top: calHeight(8),
              position: "relative",
              width: calWidth(35),
              height: calHeight(15),
              // backgroundColor: "salmon",
              cursor: "pointer",
              borderRadius: "30%",
              // opacity: "0.1",
            }}
            // onClick={() => submitRegister(1)}
          >
            <div className="popup4">
              <p>ภาคเหนือ</p>
            </div>
          </div>
        </div>
        <div className="zone4">
          <div
            style={{
              bottom: calHeight(7),
              left: calWidth(58),
              position: "relative",
              width: calWidth(35),
              height: calHeight(15),
              // backgroundColor: "black",
              cursor: "pointer",
              borderRadius: "30%",
              // opacity: "0.1",
            }}
            // onClick={() => submitRegister(2)}
          >
            <div className="popup4">
              <p>ภาคอีสาน</p>
            </div>
          </div>
        </div>
        <div className="zone4">
          <div
            style={{
              bottom: calHeight(18),
              left: calWidth(25),
              position: "relative",
              width: calWidth(35),
              // backgroundColor: "black",
              height: calHeight(16),
              cursor: "pointer",
              borderRadius: "30%",
              // opacity: "0.1",
            }}
            // onClick={() => submitRegister(3)}
          >
            <div className="popup4">
              <p>ภาคกลาง</p>
            </div>
          </div>
        </div>

        <div className="zone4">
          <div
            // onClick={() => submitRegister(4)}
            style={{
              bottom: calHeight(16),
              left: calWidth(22),
              position: "relative",
              width: calWidth(35),
              // backgroundColor: "white",
              height: calHeight(25),
              cursor: "pointer",
              borderRadius: "30%",
              // opacity: "0.1",
            }}
            className="selectZone4"
          >
            <div className="popup4">
              <p>ภาคใต้</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotFound = () => {
  return <div>Not Found</div>;
};

export default App;
