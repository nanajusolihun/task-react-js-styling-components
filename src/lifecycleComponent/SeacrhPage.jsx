import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "react-bootstrap";

const SearchPage = (props) => {
  const [search, setSearch] = useState("");

  const { onSubmit } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Ini", search);
    onSubmit(search);
  };

  return (
    <>
      <Row className="mt-5">
        <Col>
          <h1>News Updates</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="d-flex my-3" style={{ width: "100%" }}>
              <input type="text" className="form-control mx-1" placeholder="Search News..." onChange={(e) => setSearch(e.target.value)} value={search} />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default SearchPage;
