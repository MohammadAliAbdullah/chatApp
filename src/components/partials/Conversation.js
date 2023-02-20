import React, { useEffect, useState, useRef } from 'react'
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

function Conversation({ socket }) {
    const [messages, setMessages] = useState([])
    const lastMessageRef = useRef(null);
    const chatWindowRef = useRef(null);

    // Scroll to the bottom of the chat window whenever new messages are added
    useEffect(() => {
        chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }, [messages]);

    useEffect(() => {
        socket.on("messageResponse", data => setMessages([...messages, data]))
        console.table(messages)
    }, [socket, messages]);

    return (
        <div className="col-sm-8 conversation">
            <div className="row heading">
                <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                    <div className="heading-avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" />
                    </div>
                </div>
                <div className="col-sm-8 col-xs-7 heading-name">
                    <a className="heading-name-meta">John Doe
                    </a>
                    <span className="heading-online">Online</span>
                </div>
                <div className="col-sm-1 col-xs-1  heading-dot pull-right">
                    <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true" />
                </div>
            </div>
            <ChatBody messages={messages} chatWindowRef={chatWindowRef} />
            <ChatFooter />
        </div>
    )
}

export default Conversation