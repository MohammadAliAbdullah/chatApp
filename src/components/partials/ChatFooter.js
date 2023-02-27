import React, { useEffect, useState, useContext } from 'react'
import io from 'socket.io-client';
import { GlobalContext } from '../../Store/Globalstate';

const ChatFooter = ({ }) => {
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState("");
    // typing status show when write chat.
    const [isTyping, setIsTyping] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    // chat receiver id  
    const [receiverID, setReceiverID] = useState("");
    const { state, dispatch } = useContext(GlobalContext);

    // write of chat.
    const handleTyping = (event) => {
        const { value } = event.target;
        setReceiverID(state.receiverID);
        setMessage(value);
        // alert(localStorage.getItem("senderID"));
        if (value) {
            setIsTyping(true);
            socket.emit("typing", { senderID: localStorage.getItem("senderID"), receiverID: state.receiverID });
            clearTimeout(timeoutId);
            const newTimeoutId = setTimeout(() => {
                setIsTyping(false);
                socket.emit("stop_typing");
            }, 1000);
            setTimeoutId(newTimeoutId);
        } else {
            setIsTyping(false);
            socket.emit("stop_typing");
            clearTimeout(timeoutId);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        // const formattedDate = now.toLocaleDateString([], {
        //     day: 'numeric',
        //     month: 'short',
        //     year: 'numeric',
        // });
        const formattedDate = `${now.getDate()} ${now.toLocaleDateString([], {
            month: 'long'
        })} ${now.getFullYear()}`;

        // console.log(formattedDate);
        const data = {
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id,
            name: localStorage.getItem("username"),
            senderID: localStorage.getItem("senderID"),
            receiverID: state.receiverID,
            text: message,
            date: formattedDate,
            time: formattedTime,
        }
        if (message.trim() && localStorage.getItem("username")) {
            // console.table(data)
            socket.emit("message", data)
        }
        setMessage("")
        setIsTyping(false);
        clearTimeout(timeoutId);
        document.getElementById('sendMessage').value = "";
    }

    useEffect(() => {
        const newSocket = io('http://localhost:1200');
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
                        {isTyping && <p> Typing...</p>} <i className="fa fa-smile-o fa-2x" />
                    </div>
                    <div className="col-sm-9 col-xs-9 reply-main">
                        <textarea className="form-control" rows={1} id="sendMessage" name="sendMessage" defaultValue={""} onChange={handleTyping} />
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