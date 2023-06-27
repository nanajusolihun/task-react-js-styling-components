import React, { useState } from "react";
import Navigation from "./Navigation";
import LifeCycle from "./LifeCycle";
import SearchPage from "./SeacrhPage";
import { Container } from "react-bootstrap";

const NewsPage = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (payload) => {
    console.log("Test:", payload);
    setSearch(payload);
  };

  return (
    <>
      <Navigation />
      {/* {JSON.stringify(search)} */}
      <Container>
        <SearchPage onSubmit={handleSubmit} />
        <LifeCycle valueSearch={search} />
      </Container>
    </>
  );
};

export default NewsPage;
