import React from "react";
import { Navbar, Container, Nav, Row, Col, Form, FormGroup, Card, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import Axios from "axios";

const Hook = () => {
  const [search, setSearch] = useState("tesla");
  let [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      Axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2023-06-01&sortBy=publishedAt&apiKey=36b33e03afe7475e9bfd7fb418154a71`)
        .then((response) => {
          setNews(response.data.articles);
        })
        .catch((error) => {
          error.message;
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [loading]);

  return (
    <>
      <Navbar expand="lg" className="bg-primary ">
        <Container>
          <Navbar.Brand href="#">
            <h3 className="fw-bold text-white">News Updates.</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row className="mt-5">
          <Col>
            <h1>News Updates.</h1>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <Form onSubmit={handleSubmit}>
              <FormGroup className="d-flex my-3" style={{ width: "100%" }}>
                <input type="text" className="form-control mx-1" placeholder="Search News..." onChange={handleChange} />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </FormGroup>
            </Form>
          </Col>

          {loading ? (
            <Col xs="12" className="d-flex justify-content-center align-items-center w-100 min-vh-100">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Col>
          ) : (
            news.map((data, index) => (
              <Col md="4" sm="6" xs="12" key={index}>
                <Card className="h-100 shadow w-100 my-3">
                  <Card.Img variant="top" src={data.urlToImage} style={{ height: "235px" }} />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {data.author} - {data.publishedAt}
                    </Card.Subtitle>
                    <Card.Text>{data.description}</Card.Text>
                    <a href={data.url} className="btn btn-primary" target="_blank">
                      Read more...
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
};

export default Hook;
