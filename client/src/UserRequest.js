import React,{useEffect,useState}  from "react";
import axios from "axios";
import UserPlayers from "./UserPlayers";


function UserRequest() {

    const [user,setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/players")
            .then(response => {
                console.log(response.data);
                setUser(response.data);
            })
            .catch(error => {
                console.log("Error",error);
            });
    },[])

    return(
        <div>
            {user.map((item,index) => {
                return <UserPlayers
               key = {index} name = {item.name} from = {item.country}
                />
            })}
        </div>
    )
}

export default  UserRequest