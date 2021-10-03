import Card from "../ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFootballBall } from "@fortawesome/free-solid-svg-icons";
const CallOut = (props) => {
  const styles = {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginTop: "1rem",
  };

  return (
    <Card style={styles}>
      <span className="fs-1 pe-4">Go Birds!</span>
      <FontAwesomeIcon style={{ fontSize: "4rem" }} icon={faFootballBall} />
    </Card>
  );
};

export default CallOut;
