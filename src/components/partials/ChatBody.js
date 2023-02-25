
function ChatBody({ messages, chatWindowRef }) {
    return (
        <div className="row message chat-window" id="conversation" ref={chatWindowRef}>
            <div className="row message-previous">
                <div className="col-sm-12 previous">
                    <a onclick="previous(this)" id="ankitjain28" name={20}>
                        Show Previous Message!
                    </a>
                </div>
            </div>

            {messages.map(message => (
                message.name === localStorage.getItem("userName") ? (
                    <div className="row message-body" key={message.id}>
                        <div className="col-sm-12 message-main-sender">
                            <div className="sender">
                                <div className="message-text">
                                    {message.text}
                                </div>
                                <span className="message-time pull-right">
                                    {message.time}
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row message-body" key={message.id}>
                        <div className="col-sm-12 message-main-receiver">
                            <div className="receiver">
                                <div className="message-text">
                                    {message.text}
                                </div>
                                <span className="message-time pull-right">
                                    {message.time}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            ))}
        </div>
    )
}
export default ChatBody
