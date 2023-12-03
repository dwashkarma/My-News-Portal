import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function NewsItems(props) {
  return (
    <Card style={{ marginBottom: 15 }}>
      <Card.Img
        style={{ minHeight: 300, maxHeight: 300 }}
        variant="top"
        src={props.url}
      />
      <span
        class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
        style={{
          zIndex: 1,
          left: "90%",
        }}
      >
        {props.source.slice(0, 15) + "..."}
      </span>
      <Card.Body>
        <Card.Title style={{ fontFamily: "sans-serif", fontWeight: 700 }}>
          {props.title}
        </Card.Title>
        <span class="badge rounded-pill text-bg-warning">Latest</span>{" "}
        <Card.Text style={{ fontFamily: "sans-serif", fontWeight: 400 }}>
          By:{!props.author ? "Unknown" : props.author} <br />
          Date:{new Date(props.date).toGMTString()}
          {/* change the given date into GMT Date String */}
        </Card.Text>
        <Button href={props.visit} variant="success">
          Visit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NewsItems;
