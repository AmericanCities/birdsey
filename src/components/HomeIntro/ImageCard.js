import Card from '../ui/Card';
import football from "../../images/pexels-jeandaniel-francoeur-2570139.jpg";


const ImageCard =()=> {
    return (
        <Card style={{marginTop: '1rem', height: '100%'}}>
        <img
          alt=""
          src={football}
          className=""
          style={{ "maxWidth": "100%", height: "auto", objectFit: 'cover' }}
        />
      </Card>
    )
}

export default ImageCard;