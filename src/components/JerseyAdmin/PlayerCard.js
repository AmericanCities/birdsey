import  Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Jersey from "./Jersey";

const PlayerCard = (props) => {
  
  return (
    <Card border="success">
      <Card.Body>
        <Card.Title style={{display: 'flex', 'justify-content': 'space-between', flexDirection: 'row'}}>
          <div>Quez Watkins</div>
          <div><Jersey number={16}/></div>
        </Card.Title>
        <Card.Subtitle className="text-muted">WR</Card.Subtitle>
        <Card.Text>
         Reprehenderit commodo et sunt nulla nulla tempor commodo incididunt et ullamco consectetur. Labore tempor cillum quis labore reprehenderit laboris aliquip. Et minim elit ea sunt commodo in eu dolore dolor commodo aute duis.Eu occaecat laboris ut labore labore occaecat fugiat Lorem sunt dolore laborum id.
        </Card.Text>
        <Button variant="primary">Edit</Button>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
