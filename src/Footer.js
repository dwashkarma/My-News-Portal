import { Instagram, Twitter } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "./logo.jpg";
import logo1 from "./logo1.jpg";

function Footer() {
  return (
    <Box flex={12}>
      <Stack bgcolor={"#2A313F"} color={"#a1a6b1"} gap={2}>
        <Container>
          <Row style={{ marginTop: 20, marginBottom: 20 }} xs={1} sm={1} md={2}>
            <Col>
              <Typography
                style={{
                  fontFamily: "sans-serif",
                  marginTop: 5,
                  marginBottom: 5,
                }}
                variant="h5"
              >
                About News Portal
              </Typography>
              <Typography variant="p">
                Welcome to News Portal, your trusted source for the latest news
                and updates. Our mission is to provide you with up-to-date,
                reliable, and insightful news articles from around the world.
              </Typography>
              <Stack marginTop={3} direction={"row"} gap={2}>
                <FacebookIcon />
                <Instagram />
                <Twitter />
              </Stack>
            </Col>
            <Col>
              <Typography
                variant="h5"
                style={{
                  fontFamily: "sans-serif",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                About Us
              </Typography>
              <Typography variant="p">
                We value your trust and aim to be your go-to source for news and
                information. If you have any feedback, suggestions, or
                questions, please don't hesitate to contact us. We appreciate
                your support and look forward to serving you with the latest
                news and stories.
              </Typography>
            </Col>
          </Row>

          <Row style={{ marginBottom: 15 }} xs={1} sm={1} md={3}>
            <Col>
              <Typography
                style={{
                  marginTop: 30,
                }}
              >
                © 2023 News Portal - All right Reserved.
              </Typography>
            </Col>
            <Col>
              <Row style={{ margin: 5, textAlign: "center" }}>
                <Typography variant="h6" style={{ marginBottom: 8 }}>
                  Initiative by
                </Typography>
                <Col>
                  <img style={{ height: 40 }} src={logo} alt="Dubai" />
                </Col>
                <Col>
                  <img style={{ height: 40 }} src={logo1} alt="Dubai" />
                </Col>
              </Row>
            </Col>
            <Col>
              <Typography style={{ marginTop: 30 }} variant="h6">
                Developed By: Dwash Karma
              </Typography>
            </Col>
          </Row>
        </Container>
      </Stack>
    </Box>
  );
}

export default Footer;
