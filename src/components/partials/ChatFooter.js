import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';

const ChatFooter = () => {
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState("")
    // const handleTyping = () => socket.emit("typing", `${localStorage.getItem("userName")} is typing`)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            text: message,
            name: localStorage.getItem("userName"),
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id
        }
        if (message.trim() && localStorage.getItem("userName")) {
            console.table(data)
            socket.emit("message", data)
        }
        setMessage("")
        document.getElementById('sendMessage').value = "";
    }

    useEffect(() => {
        const newSocket = io('http://localhost:8000');
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
        };
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row reply">
                    <div className="col-sm-1 col-xs-1 reply-emojis">
                        <i className="fa fa-smile-o fa-2x" />
                    </div>
                    <div className="col-sm-9 col-xs-9 reply-main">
                        <textarea className="form-control" rows={1} id="sendMessage" name="sendMessage" defaultValue={""} onChange={(e) => { setMessage(e.target.value) }} />
                    </div>
                    <div className="col-sm-1 col-xs-1 reply-recording">
                        <i className="fa fa-microphone fa-2x" aria-hidden="true" />
                    </div>
                    <div className="col-sm-1 col-xs-1 reply-send">
                        <button type="submit"><i className="fa fa-send fa-2x" aria-hidden="true" /></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ChatFooter