import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import io from 'socket.io-client';
import '../style.css';

function Login() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("");
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io.connect('http://localhost:8000');
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("userName", userName);
        socket.emit("newUser", { userName, socketID: socket.id })
        navigate("/chat")
    }

    return (
        <div className="login-page">
            <div className="form-div">
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" onChange={(event) => setUserName(event.target.value)}/>
                    <input type="password" placeholder="password" />
                    <button type="submit">login</button>
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login