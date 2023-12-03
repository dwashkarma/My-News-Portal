import React, { useEffect, useRef, useState } from "react";
import NewsItems from "./NewsItems";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
function News({ pageSize, country, category }) {
  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const totalResultsRef = useRef(""); // Using useRef to store totalResults
  // When you declare a variable using let outside the useEffect, it's treated as a local variable for that specific render,
  // and its value is not preserved between renders.
  // In React, it's recommended to use state or a useRef to store values that need to persist between renders.

  const handlePrev = () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2dc1995b620b4027921449163ef1dc7d&page=${
      page - 1
    }&pageSize=${pageSize}`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.articles);
        setPage(page - 1);
        setLoading(false);
        console.log("Next");
      })
      .catch((err) => {
        console.log("Error catching data", err);
      });
  };
  const handleNext = () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2dc1995b620b4027921449163ef1dc7d&page=${
      page + 1
    }&pageSize=${pageSize}`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.articles);
        setPage(page + 1);
        setLoading(false);
        console.log("Next");
      })
      .catch((err) => {
        console.log("Error catching data", err);
      });
  };

  //life cycle method componentDidMount in class component is used By useEffect hook in functional component
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=2dc1995b620b4027921449163ef1dc7d&page=1&category=${category}&pageSize=${pageSize}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(url);
        setArticle(data.articles);
        setLoading(false);
        document.title = "News Portal-" + category;
        totalResultsRef.current = data.totalResults; //The .current property is included when using the useRef hook to access the current value of the reference. This is because useRef returns an object with a .current property, and the value you want to store or access is stored within that property.
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [pageSize, country, category]);
  // empty dependencies is used to run the code once in the begining i.e:
  // useEffect(()={//code here },[])
  return (
    <Box flex={12}>
      <Container>
        <Typography
          style={{
            textAlign: "center",
            marginTop: 80,
            fontFamily: "sans-serif",
            fontWeight: 800,
            color: "#F0F8FF",
          }}
          variant="h4"
        >
          {"Top Headlines-" + category[0].toUpperCase() + category.slice(1)}
          {/* The toUpperCase() method converts a string value to uppercase. The
          slice() method is used to get all of the characters from index
          position 1 to the end of the string. The uppercase first letter is
          concatenated with the rest of the string. This method does not alter
          the original string. */}
        </Typography>
        <div className="text-center  mt-5">
          {loading && (
            <CircularProgress
              sx={{
                alignItems: "center",
                color: "black",
              }}
            />
            // <Skeleton variant="rectangular" width={210} height={118} />
          )}
        </div>
        <div className="mt-5" style={{ display: "flex" }}>
          <Row
            xs={1}
            md={3}
            sm={2}
            style={{
              justifyContent: "left",
            }}
          >
            {!loading &&
              article.map((items, key) => {
                return (
                  <Col>
                    <NewsItems
                      title={items.title.slice(0, 50) + "..."}
                      url={
                        items.urlToImage
                          ? items.urlToImage
                          : "https://www.universetoday.com/wp-content/uploads/2023/11/SN1994D.jpeg"
                      }
                      visit={items.url}
                      author={items.author}
                      date={items.publishedAt}
                      source={items.source.name}
                    />
                  </Col>
                );
              })}
          </Row>
        </div>
        <div className="d-flex justify-content-between mt-5 mb-5">
          <button
            onClick={handlePrev}
            disabled={page <= 1}
            className="btn btn-success"
          >
            &larr; Previous
          </button>
          <button
            disabled={page + 1 > Math.ceil(totalResultsRef.current / pageSize)}
            onClick={handleNext}
            className="btn btn-success"
          >
            Next &rarr;
          </button>
        </div>
      </Container>
    </Box>
  );
}
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
// News.defaultProps = {
//   pageSize: 4,
//   country: "us",
//   category: "general",
// };

export default News;
