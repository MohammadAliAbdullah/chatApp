import React, { useState, useEffect } from "react";

function ComposeSideBar() {
    return (
        <div>
            <div className="row newMessage-heading">
                <div className="row newMessage-main">
                    <div className="col-sm-2 col-xs-2 newMessage-back">
                        <i className="fa fa-arrow-left" aria-hidden="true" />
                    </div>
                    <div className="col-sm-10 col-xs-10 newMessage-title">
                        New Chat
                    </div>
                </div>
            </div>
            <div className="row composeBox">
                <div className="col-sm-12 composeBox-inner">
                    <div className="form-group has-feedback">
                        <input id="composeText" type="text" className="form-control" name="searchText" placeholder="Search People" />
                        <span className="glyphicon glyphicon-search form-control-feedback" />
                    </div>
                </div>
            </div>
            <div className="row compose-sideBar">
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                        <div className="avatar-icon">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                        </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                        <div className="row">
                            <div className="col-sm-8 col-xs-8 sideBar-name">
                                <span className="name-meta">John Doe
                                </span>
                            </div>
                            <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                <span className="time-meta pull-right">18:18
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                        <div className="avatar-icon">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" />
                        </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                        <div className="row">
                            <div className="col-sm-8 col-xs-8 sideBar-name">
                                <span className="name-meta">John Doe
                                </span>
                            </div>
                            <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                <span className="time-meta pull-right">18:18
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                        <div className="avatar-icon">
                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" />
                        </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                        <div className="row">
                            <div className="col-sm-8 col-xs-8 sideBar-name">
                                <span className="name-meta">John Doe
                                </span>
                            </div>
                            <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                <span className="time-meta pull-right">18:18
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                        <div className="avatar-icon">
                            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" />
                        </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                        <div className="row">
                            <div className="col-sm-8 col-xs-8 sideBar-name">
                                <span className="name-meta">John Doe
                                </span>
                            </div>
                            <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                <span className="time-meta pull-right">18:18
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                        <div className="avatar-icon">
                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" />
                        </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                        <div className="row">
                            <div className="col-sm-8 col-xs-8 sideBar-name">
                                <span className="name-meta">John Doe
                                </span>
                            </div>
                            <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                <span className="time-meta pull-right">18:18
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                        <div className="avatar-icon">
                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" />
                        </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                        <div className="row">
                            <div className="col-sm-8 col-xs-8 sideBar-name">
                                <span className="name-meta">John Doe
                                </span>
                            </div>
                            <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                <span className="time-meta pull-right">18:18
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                        <div className="avatar-icon">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" />
                        </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                        <div className="row">
                            <div className="col-sm-8 col-xs-8 sideBar-name">
                                <span className="name-meta">John Doe
                                </span>
                            </div>
                            <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                <span className="time-meta pull-right">18:18
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                        <div className="avatar-icon">
                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" />
                        </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                        <div className="row">
                            <div className="col-sm-8 col-xs-8 sideBar-name">
                                <span className="name-meta">John Doe
                                </span>
                            </div>
                            <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                <span className="time-meta pull-right">18:18
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                        <div className="avatar-icon">
                            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" />
                        </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                        <div className="row">
                            <div className="col-sm-8 col-xs-8 sideBar-name">
                                <span className="name-meta">John Doe
                                </span>
                            </div>
                            <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                <span className="time-meta pull-right">18:18
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                        <div className="avatar-icon">
                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" />
                        </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                        <div className="row">
                            <div className="col-sm-8 col-xs-8 sideBar-name">
                                <span className="name-meta">John Doe
                                </span>
                            </div>
                            <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                <span className="time-meta pull-right">18:18
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComposeSideBar