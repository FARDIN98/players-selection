import React from 'react';
import './PlayersData.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const PlayersData = (props) => {
    // console.log(props);
    const {image,name,salary} = props.player
    const setSize = {
        height:"400px"
    }
    const handleAddPlayer = props.handleAddPlayer
    return (
        <div className="card">
            <img style={setSize} src={image} alt=""/>
            <h3>Name: {name}</h3>
            <h4>Salary: {salary}</h4>
            <button onClick={()=>handleAddPlayer(props.player)} className="btn btn-primary"><FontAwesomeIcon icon={faUser} /> Pick Player</button>
        </div>
    );
};

export default PlayersData;