import Card from "../ui/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const loginHandler = () => {
    console.log("clicked");
  };

  return (
    <Card style={{ marginTop: "1rem", padding: "1.5rem", flexDirection: 'column'}}>
        <h4>Login in to continue</h4>
      <Form onSubmit={loginHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="demo username is: matt" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="demo password is: password" />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </Card>
  );
};

export default Login;
