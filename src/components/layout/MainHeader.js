import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import eaglesLogo from "../../images/eaglesLogo.png";
import { useDispatch, useSelector } from "react-redux";

const MainHeader = (props) => {
  
  const isLoggedIn = useSelector((state)=>state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler =() => {
    dispatch({type: "LOGOUT"})
  } 

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
            <span onClick={logoutHandler}>logout</span>
          </Navbar.Text> }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
