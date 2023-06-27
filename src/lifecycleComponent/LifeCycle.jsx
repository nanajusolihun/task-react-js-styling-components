import React from "react";
import CardNews from "./CardsNews";
import { Row, Col } from "react-bootstrap";

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [], loading: false };
  }

  componentDidUpdate(preProps) {
    if (this.props.valueSearch !== preProps.valueSearch) {
      this.setState({ ...this.state, loading: true });
      fetch(`https://newsapi.org/v2/everything?q=${this.props.valueSearch || "tesla"}&from=2023-05-26&sortBy=publishedAt&apiKey=36b33e03afe7475e9bfd7fb418154a71`)
        .then((response) => response.json())
        .then((res) => {
          this.setState({
            news: res.articles,
            loading: false,
          });
        });
    }
  }

  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-05-26&sortBy=publishedAt&apiKey=36b33e03afe7475e9bfd7fb418154a71`)
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          news: res.articles,
          loading: false,
        });
      });
  }

  render() {
    return (
      <Row>
        {/* {JSON.stringify(this.state.loading)} */}
        {this.state.loading ? (
          <Col md="4" sm="12" xs="12">
            <h1>Loading...</h1>
          </Col>
        ) : (
          this.state.news.map((news, index) => {
            return (
              <>
                <Col md="4" sm="6" xs="12" className="my-3">
                  <CardNews key={index} image={news.urlToImage} author={news.author} title={news.title} publishdate={news.publishedAt} desc={news.description} url={news.url} />;
                </Col>
              </>
            );
          })
        )}
      </Row>
    );
  }
}
