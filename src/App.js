import React, {useState} from "react";
import Icons from "./Components/Icons";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import { Button } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.css';

  import "./style.css";
import { FaTicketAlt } from "react-icons/fa";


const tictacArray = new Array(9).fill("");
const App =()=>{

    let [isCross, setIsCross] = useState(true)
    let [winMessage, setWinMessage] = useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tictacArray.fill("")
    }

    const findWinner =()=>{
        if(tictacArray[0]==tictacArray[1] && tictacArray[0]==tictacArray[2] && tictacArray[0]!=""){
            setWinMessage(tictacArray[0]+ " has won")
        }
        else if(tictacArray[3]==tictacArray[4] && tictacArray[3]==tictacArray[5] && tictacArray[3]!=""){
            setWinMessage(tictacArray[3]+" has won")
        }
        else if(tictacArray[6]==tictacArray[7] && tictacArray[6]==tictacArray[8] && tictacArray[6]!=""){
            setWinMessage(tictacArray[6]+"has won")
        }
        else if(tictacArray[0]==tictacArray[3] && tictacArray[0]==tictacArray[6] && tictacArray[0]){
            setWinMessage(tictacArray[0]+" has won")
        }
        else if(tictacArray[1]==tictacArray[4] && tictacArray[1]==tictacArray[7] && tictacArray[1]){
            setWinMessage(tictacArray[1]+" has won")
        }
        else if(tictacArray[2]==tictacArray[5] && tictacArray[2]==tictacArray[8] && tictacArray[2]){
            setWinMessage(tictacArray[2]+" has won")
        }
        else if(tictacArray[0]==tictacArray[4] && tictacArray[0]==tictacArray[8] && tictacArray[0]){
            setWinMessage(tictacArray[0]+" has won")
        }
        else if(tictacArray[2]==tictacArray[4] && tictacArray[2]==tictacArray[6] && tictacArray[2]){
            setWinMessage(tictacArray[2]+" has won")
        }

    }

    return(
        <div><Icons choice="circle"/></div>
    )
}

export default App