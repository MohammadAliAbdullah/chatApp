import React, { useState, useEffect } from "react";
import '../App.css';
import ComposeSideBar from "./partials/ComposeSideBar";
import Conversation from "./partials/Conversation";
import SideBar from "./partials/SideBar";
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:8000');

function ChatPage() {
    const [sideTwoStyles, setSideTwoStyles] = useState({ left: "-100%" });

    useEffect(() => {
        const handleHeadingClick = () => {
            setSideTwoStyles({ left: "0" });
        };

        const handleBackClick = () => {
            setSideTwoStyles({ left: "-100%" });
        };

        const heading = document.querySelector(".heading-compose");
        const back = document.querySelector(".newMessage-back");

        heading.addEventListener("click", handleHeadingClick);
        back.addEventListener("click", handleBackClick);

        return () => {
            heading.removeEventListener("click", handleHeadingClick);
            back.removeEventListener("click", handleBackClick);
        };
    }, []);

    return (
        <div className="container app">
            <div className="row app-one">
                <div className="col-sm-4 side">
                    <div className="side-one">
                        <SideBar socket={socket} />
                    </div>
                    <div className="side-two" style={sideTwoStyles}>
                        <ComposeSideBar />
                    </div>
                </div>
                <Conversation socket={socket} />
            </div>
        </div>
    )
}

export default ChatPage