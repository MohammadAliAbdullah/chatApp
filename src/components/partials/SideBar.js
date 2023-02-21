import React, { useState, useEffect } from 'react'

function SideBar({ socket }) {
    const [users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState('');

    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data));
        socket.on("allUsers", data => setAllUsers(data));
        console.log(allUsers);
    }, [socket, users, allUsers])

    return (
        <div>
            <div className="row heading">
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
                {/* ======= */}
                {users.map(user =>
                    <div className="row sideBar-body">
                        <div className="col-sm-3 col-xs-3 sideBar-avatar">
                            <div className="avatar-icon">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                            </div>
                        </div>
                        <div className="col-sm-9 col-xs-9 sideBar-main">
                            <div className="row">
                                <div className="col-sm-8 col-xs-8 sideBar-name">
                                    <span className="name-meta" key={user.socketID}>{user.userName}</span>
                                </div>
                                <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                    <span className="time-meta pull-right">18:18</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* ======= */}
                {allUsers.map(user =>
                    <div className="row sideBar-body">
                        <div className="col-sm-3 col-xs-3 sideBar-avatar">
                            <div className="avatar-icon">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                            </div>
                        </div>
                        <div className="col-sm-9 col-xs-9 sideBar-main">
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
        </div>

    )
}

export default SideBar