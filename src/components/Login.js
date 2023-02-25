import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
// import io from 'socket.io-client';
import '../style.css';

function Login({ socket }) {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [senderID, setSenderID] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        socket.on("allUsers", data => setAllUsers(data));
        console.table(allUsers);
    }, [socket, allUsers])

    const handleSubmit = (e) => {
        e.preventDefault();
        // auth
        const checkAuthUser = allUsers.find(({ username }) => username === userName);
        if (checkAuthUser) {
            if (checkAuthUser.password == password) {
                // console.log(checkAuthUser.password);
                localStorage.setItem("senderID", checkAuthUser.id);
                localStorage.setItem("username", checkAuthUser.username);
                localStorage.setItem("socketID", socket.id);
                socket.emit("newUser", { userName, socketID: socket.id });
                navigate("/chat");
            } else {
                alert('Password wrong');
            }
        } else {
            alert('User Name wrong');
        }
    }

    return (
        <div className="login-page">
            <div className="form-div">
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" onChange={(event) => setUserName(event.target.value)} />
                    <input type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} />
                    <button type="submit">login</button>
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login