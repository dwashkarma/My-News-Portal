import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

const backgroundStyle = {
  height: "350px",
  opacity: 1,
  position: "relative",
  backgroundColor: "black",
  marginTop: 55,

  backgroundImage:
    'url("https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg")',
  backgroundPosition: "0px -300.6px",
  dataStellarBackgroundRatio: "0.5",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
function Home({ country, category }) {
  const [article, setArticle] = useState([]);

  // const navigate = useNavigate();

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=2dc1995b620b4027921449163ef1dc7d&page=1&category=${category}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(url);
        setArticle(data.articles);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [country, category]);
  return (
    <Box flex={12} bgcolor={"#778899"}>
      <Stack style={backgroundStyle}></Stack>
      <Stack marginTop={10}>
        <Container>
          <Row xs={2} sm={2} md={2}>
            <Col style={{ cursor: "pointer" }}>
              {article.length > 2 ? ( // Check if article has at least 2 elements
                <a href={article[4].url}>
                  <div className="card text-bg-dark">
                    <img
                      src={article[4].urlToImage}
                      className="card-img"
                      alt="..."
                    />
                    <div className="card-img-overlay">
                      <h5
                        className="card-title "
                        style={{
                          fontWeight: 700,
                          color: "#FFF5EE",
                          fontFamily: "sans-serif",
                        }}
                      >
                        "{article[4].title}"
                      </h5>
                      <p
                        className="card-text "
                        style={{ color: "#F5F5F5", fontWeight: 700 }}
                      >
                        {article[4].description}
                      </p>
                      <p className="card-text " style={{ color: "#FFF5EE" }}>
                        <small>
                          Date: {new Date(article[4].publishedAt).toGMTString()}
                        </small>
                      </p>
                    </div>
                  </div>
                </a>
              ) : (
                // Handle the case when article doesn't have enough elements
                <p>No articles available</p>
              )}
            </Col>
            <Col>
              <Stack gap={2}>
                <Container>
                  {article.slice(0, 4).map((items, index) => {
                    return (
                      <a
                        href={items.url}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Card
                          style={{ marginBottom: 5, textDecoration: "none" }}
                          key={index}
                        >
                          <Card.Header
                            style={{ backgroundColor: "transparent" }}
                          >
                            {items.title}
                          </Card.Header>
                          <Card.Body>
                            <blockquote className="blockquote mb-0">
                              {/* <p>{items.description} </p> */}
                              <footer className="blockquote-footer">
                                {new Date(items.publishedAt).toGMTString()}
                                <cite title="Source Title">
                                  {" "}
                                  {items.author}
                                </cite>
                              </footer>
                            </blockquote>
                          </Card.Body>
                        </Card>
                      </a>
                    );
                  })}
                </Container>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Stack>
      <hr />
      <Stack marginBottom={10} flex={12} marginTop={5}>
        <Container>
          <Row xs={1} sm={2} md={2}>
            <Col>
              {article.slice(5, 8).map((items, index) => {
                return (
                  <div
                    className="card mb-3"
                    style={{ maxWidth: "600px", cursor: "pointer" }}
                  >
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href={items.url}
                    >
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            style={{ height: 180 }}
                            src={items.urlToImage}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">
                              {items.title.slice(0, 25) + "..."}
                            </h5>
                            <p className="card-text">
                              {items.description.slice(0, 50) + "..."}
                            </p>
                            <p className="card-text">
                              <small className="text-body-secondary">
                                {new Date(items.publishedAt).toGMTString()}
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </Col>
            <Col>
              {article.slice(0, 1).map((items, index) => {
                return (
                  <a href={items.url}>
                    <div key={index} className="card text-bg-dark">
                      <img
                        src={items.urlToImage}
                        className="card-img"
                        alt="..."
                      />
                      <div className="card-img-overlay">
                        <h5 className="card-title text-dark">{items.title}</h5>
                        {/* <p className="card-text text-dark">
                          {items.description}
                        </p> */}
                        <p className="card-text text-dark">
                          <small>
                            {new Date(items.publishedAt).toGMTString()}
                          </small>
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </Col>
          </Row>
        </Container>
      </Stack>
    </Box>
  );
}

export default Home;
