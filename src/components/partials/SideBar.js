import React, { useState, createContext, useContext, useEffect } from 'react'
import { GlobalContext } from '../../Store/Globalstate';

function SideBar({ socket }) {
    const [users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    // user information 
    const [username, setUsername] = useState('');
    const { state, dispatch } = useContext(GlobalContext);

    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data));
        socket.on("allUsers", data => setAllUsers(data));
    }, [socket, users, allUsers])

    const sendMessage = (userid, username) => {
        const data = {
            id: userid,
            name: username
        }
        dispatch({
            type: "CHAT_SEND",
            payload: data
        });
        // alert(`hello, ${username}`);
        setUsername("");
    }

    return (
        <>
            <div className="row heading"> {username}
                <div className="col-sm-3 col-xs-3 heading-avatar">
                    <div className="heading-avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                    </div>
                </div>
                <div className="col-sm-1 col-xs-1  heading-dot  pull-right">
                    <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true" />
                </div>
                <div className="col-sm-2 col-xs-2 heading-compose  pull-right">
                    <i className="fa fa-comments fa-2x  pull-right" aria-hidden="true" />
                </div>
            </div>

            <div className="row searchBox">
                <div className="col-sm-12 searchBox-inner">
                    <div className="form-group has-feedback">
                        <input id="searchText" type="text" className="form-control" name="searchText" placeholder="Search" />
                        <span className="glyphicon glyphicon-search form-control-feedback" />
                    </div>
                </div>
            </div>

            <div className="row sideBar">
                {allUsers.map(user =>
                    <div className="row sideBar-body" style={user.id === state.id ? { backgroundColor: "#ccffcc" } : null}>
                        {/* <button >Greet</button> */}
                        <div className="col-sm-3 col-xs-3 sideBar-avatar">
                            <div className="avatar-icon">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                            </div>
                        </div>

                        <div className="col-sm-9 col-xs-9 sideBar-main" onClick={() => sendMessage(user.id, user.name)}>
                            <div className="row">
                                <div className="col-sm-8 col-xs-8 sideBar-name">
                                    <span className="name-meta" key={user.id}>{user.name}</span>
                                </div>
                                <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                    <span className="time-meta pull-right">18:18</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>

    )
}

export default SideBar