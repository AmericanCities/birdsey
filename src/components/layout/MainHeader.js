import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import eaglesLogo from "../../images/eaglesLogo.png";

const MainHeader = (props) => {
  
  const isLoggedIn = false;


  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={eaglesLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Birdsey
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
          {isLoggedIn && <Navbar.Text>
            <a href="#login">logout</a>
          </Navbar.Text> }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
