import './card.scss';


const Card = (props) => {

  return (
    <div className="app-card d-flex" style={props.style ? props.style: null}> 
      {props.children}
    </div>
  );
};

export default Card;
