import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';

function Conversation() {
    const [message, setMessage] = useState("");
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io('http://localhost:8000');
        setSocket(newSocket);
        return () => {
          newSocket.disconnect();
        };
      }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
       socket.emit('new message', message);
        setMessage(''); 
    };

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
            <div className="row message" id="conversation">
                <div className="row message-previous">
                    <div className="col-sm-12 previous">
                        <a onclick="previous(this)" id="ankitjain28" name={20}>
                            Show Previous Message!
                        </a>
                    </div>
                </div>
                <div className="row message-body">
                    <div className="col-sm-12 message-main-receiver">
                        <div className="receiver">
                            <div className="message-text">
                                Hi, what are you doing?!
                            </div>
                            <span className="message-time pull-right">
                                Sun
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row message-body">
                    <div className="col-sm-12 message-main-sender">
                        <div className="sender">
                            <div className="message-text">
                                I am doing nothing man!
                            </div>
                            <span className="message-time pull-right">
                                Sun
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row reply">
                    <div className="col-sm-1 col-xs-1 reply-emojis">
                        <i className="fa fa-smile-o fa-2x" />
                    </div>
                    <div className="col-sm-9 col-xs-9 reply-main">
                        <textarea className="form-control" rows={1} id="comment" name="sendMessage" defaultValue={""} onChange={(e) => { setMessage(e.target.value) }} />
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

export default Conversation