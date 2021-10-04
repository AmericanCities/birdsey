import Card from '../ui/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const JerseyForm = (props)=> {
    
    
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();

    const jerseyUpdateHandler = (event)=>{
      const newPlayer = {
        id: number,
        playerName: name,
        position: position,
        number: number,
      }

      dispatch({type:"ADD_PLAYER", payload: newPlayer});
      event.preventDefault();
    }


    return (
        <Card
        style={{ marginTop: "1rem", padding: "1.5rem", flexDirection: "column" }}
      >
        <h4>Jersey Managment</h4>
        <Form onSubmit={jerseyUpdateHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Player Name</Form.Label>
            <Form.Control
              placeholder="enter player name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Position</Form.Label>
            <Form.Control
              placeholder="enter player's position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Jersey Number</Form.Label>
            <Form.Control
              placeholder="enter jersey number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Save</Button>
        </Form>
      </Card>
    );
}

export default JerseyForm