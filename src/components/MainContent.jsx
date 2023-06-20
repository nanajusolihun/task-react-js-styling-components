import { Container, Button } from "react-bootstrap";
import Profile from "../images/profile.png";

const MainContent = () => {
  return (
    <Container className="text-center p-3 my-3" variant="secondary">
      <img src={Profile} alt="Profile Name" className="rounded-circle my-2" width={300} />
      <h1>NANA JUSOLIHUN</h1>
      <h3>Fullstack Developer</h3>
      <Button className="m-3" href="https://github.com/nanajusolihun" variant="primary" target="_blank"> 
        Git Hub
      </Button>
      <Button className="m-3" href="https://www.linkedin.com/in/nana-jusolihun-7a88a3111/" variant="primary" target="_blank">
        LinkedIn
      </Button>
    </Container>
  );
};

export default MainContent;
