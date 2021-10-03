import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt } from "@fortawesome/free-solid-svg-icons";

const Jersey = (props) => {
  return (
    <p>
      <strong>
        <span className="pe-2">{props.number}</span>
        <FontAwesomeIcon style={{ color: "green" }} icon={faTshirt} />
      </strong>
    </p>
  );
};

export default Jersey;
