import React, { useEffect, useState, useRef, createContext, useContext } from 'react'
import { GlobalContext } from '../../Store/Globalstate';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

function Conversation({ socket }) {
    const { state, dispatch } = useContext(GlobalContext);
    const [messages, setMessages] = useState([]);
    const chatWindowRef = useRef(null);
    const [isTyping, setIsTyping] = useState(false);

    // Scroll to the bottom of the chat window whenever new messages are added
    useEffect(() => {
        chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }, [messages]);

    useEffect(() => {
        socket.on("messageResponse", data => setMessages([...messages, data]))
        // console.table(messages)
    }, [socket, messages]);

    socket.on("user_typing", (userId) => {
        // setTypingUsers((users) => [...users, userId]);
    });

    socket.on("user_stop_typing", (userId) => {
        // setTypingUsers((users) => users.filter((user) => user !== userId));
    });

    return (
        <div className="col-sm-8 conversation">
            <div className="row heading">
                <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                    <div className="heading-avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" />
                    </div>
                </div>
                <div className="col-sm-8 col-xs-7 heading-name">
                    <a className="heading-name-meta">{state.name}</a>
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