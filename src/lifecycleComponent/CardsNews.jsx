// import Button from "react-bootstrap/Button";
import { Container, Card } from "react-bootstrap";

function CardNews(props) {
  return (
    <Card className="h-100 shadow w-100 my-3">
      <Card.Img variant="top" src={props.image} style={{ height: "235px" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.author} - {props.publishdate}
        </Card.Subtitle>
        <Card.Text>{props.desc}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <a href={props.url} className="btn btn-primary" target="_blank">
          Read more...
        </a>
      </Card.Body>
    </Card>
  );
}

export default CardNews;
