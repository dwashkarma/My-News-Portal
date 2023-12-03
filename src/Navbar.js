// import { Stack, Typography } from "@mui/material";
// import React from "react";
// import { Col, Container, Nav, Row } from "react-bootstrap";

// let navStyle = {
//   fontWeight: 600,
//   margin: 15,

//   color: "#ffff",
//   cursor: "pointer",
//   justifyContent: "center",
//   alignItems: "center",
// };
// function Navbar() {
//   return (
//     <>
//       <Stack
//         position={"sticky"}
//         bgcolor={"black"}
//         flex={12}
//         display={{ xs: "none", md: "block" }}
//       >
//         <Container>
//           <Row md={3}>
//             <Col>
//               <Typography variant="h4" style={navStyle}>
//                 News Portal
//               </Typography>
//             </Col>
//             <Col lg={6} sm={6}>
//               <Nav
//               // style={{ backgroundColor: "#ffff" }}
//               // className="justify-content-center"
//               // activeKey="/home"
//               >
//                 <Nav.Item style={navStyle}>Home</Nav.Item>
//                 <Nav.Item style={navStyle}>About</Nav.Item>
//                 <Nav.Item style={navStyle}>Sports</Nav.Item>
//                 <Nav.Item style={navStyle}>Earth</Nav.Item>
//                 <Nav.Item style={navStyle}>Travel</Nav.Item>
//               </Nav>
//             </Col>
//             <Col lg={2}>
//               <Typography style={{ marginTop: 20, borderStyle: "none" }}>
//                 <input placeholder="Search....." type="text" />
//               </Typography>
//             </Col>
//           </Row>
//         </Container>
//       </Stack>
//       <Stack
//         bgcolor={"black"}
//         flex={12}
//         display={{ xs: "block", sm: "none", md: "none" }}
//       >
//         <Container>
//           <Row style={{ textAlign: "center", marginTop: 12 }}>
//             <Typography style={navStyle} variant="h3">
//               News Portal
//             </Typography>
//           </Row>
//           <Row
//             style={{
//               justifyContent: "center",
//               alignItems: "center",
//               textAlign: "center",
//               marginTop: 12,
//             }}
//           >
//             <Typography>
//               <Nav
//               // style={{ backgroundColor: "#ffff" }}
//               // className="justify-content-center"
//               // activeKey="/home"
//               >
//                 <Nav.Item style={navStyle}>Home</Nav.Item>
//                 <Nav.Item style={navStyle}>About</Nav.Item>
//                 <Nav.Item style={navStyle}>Sports</Nav.Item>
//                 <Nav.Item style={navStyle}>Earth</Nav.Item>
//                 <Nav.Item style={navStyle}>Travel</Nav.Item>
//               </Nav>
//             </Typography>
//           </Row>
//           <Row>
//             <Typography style={{ textAlign: "center", marginBottom: 20 }}>
//               <input placeholder="Search....." type="text" />
//             </Typography>
//           </Row>
//         </Container>
//       </Stack>
//     </>
//   );
// }

// export default Navbar;
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body ">
      {/* [fixed-top] to make the navbar sticky to the top-- its a bootstrap class */}
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            News Portal
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/travel">
                Travel
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
