import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export class User_menu extends Component {
    render() {
        return (
            <Fragment>
                <li className="onhover-div mobile-cart">
                    <div className="media align-items-center">
                        <Avatar size="large" className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" icon={<UserOutlined />} />
                        <div className="dotted-animation"><span className="animate-circle"></span><span className="main-circle"></span></div>
                    </div>
                    <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover onhover-div show-div shopping-cart">
                        <li><Link to={`${process.env.PUBLIC_URL}/settings/profile`} ><i data-feather="user"></i>Edit Profile</Link></li>
                        <li><a href="javascript:void(0)"><i data-feather="settings"></i>Settings</a></li>
                        <li><Link to={''} onClick={() => this.props.logout()} ><i data-feather="log-out"></i>Logout</Link></li>
                    </ul>
                </li>        </Fragment>
        )
    }
}

export default User_menu