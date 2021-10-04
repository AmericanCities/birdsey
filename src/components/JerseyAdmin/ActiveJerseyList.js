import { useSelector } from "react-redux";
import ActiveJerseyItem from "./ActiveJerseyItem";

const ActiveJerseyList =()=>{
    const activePlayers = useSelector((state)=>state.players.players);
    return (
        <div style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {activePlayers.map((player) => 
                <div  key={player.id} className="py-2 px-2">
                <ActiveJerseyItem
                playerName={player.playerName}
                position={player.position}
                number={player.number}

                />
                </div>
            )}

        </div>
    );
}

export default ActiveJerseyList;