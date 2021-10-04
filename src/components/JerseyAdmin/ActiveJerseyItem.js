import Card from "../ui/Card";
import Button from "react-bootstrap/Button";
import Jersey from "./Jersey";

const ActiveJerseyItem = (props) => {
  return (
    <Card>
      <div>
        <div>
          <div>
            <div>{props.playerName}</div>
            <div className="text-muted">{props.position}</div>
          </div>
          <div className="display-5">
            <Jersey number={props.number} />
          </div>
        </div>

        <Button variant="primary">Edit</Button>
        <Button variant="primary">Delete</Button>
      </div>
    </Card>
  );
};

export default ActiveJerseyItem;
