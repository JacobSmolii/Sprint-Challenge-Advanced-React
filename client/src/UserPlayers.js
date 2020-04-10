import React from "react";
import "./App.css"
function UserPlayers(props) {
    return(
        <div className="list">
            <li>My name is:-----<span>{ props.name}</span>: I am from:----<span>{props.from}</span></li>
        </div>
    )
}
export default UserPlayers