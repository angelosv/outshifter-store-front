import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {logoutUser} from '../../../actions/'
import { connect } from "react-redux";
import LogoImage from "../../common/Logo";
import {HeaderWrapper} from './style'
import Cart from '../../containers/CartContainer'
export class Header extends Component {

    constructor(props) {
        super(props);

		this.state = {
			isLoading:false
		}
    }

    componentDidMount() {


        this.setState({ open: true });
    }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
	}
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number >= 300) {
            if (window.innerWidth < 576) {
                document.getElementById("sticky").classList.remove('fixed');
            }else
            	document.getElementById("sticky").classList.add('fixed');
        } else {
            document.getElementById("sticky").classList.remove('fixed');
        }
    }



    logoutHandle = () => {
    const {logout, history} = this.props;
    history.push('/')

    logout(history)
}

	load = ()=>{
		this.setState({isLoading: true});
		fetch().then(()=>{
			// deal with data fetched
			this.setState({isLoading: false})
		})
	};
	
    render() {
        console.log(this.props,'this props')
        return (
            <div>
                <header id="sticky" className="sticky">
                    {//this.state.isLoading ? <Pace color="#27ae60"/> : null
                    }
					<div className="mobile-fix-option"></div>

					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-12">
								<div className="main-menu">
									<div className="menu-left">
										<div className="brand-logo">
                                        <LogoImage/>
										</div>
									</div>
									<div className="menu-right pull-right">
										{/*Top Navigation Bar Component*/}

										<div>
											<div className="icon-nav">
												<ul>
													<li className="onhover-div mobile-search">
														<div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`} onClick={this.openSearch} className="img-fluid" alt="" />
															<i className="fa fa-search" onClick={this.openSearch}></i></div>
													</li>
                                                    
													<Cart/>
                                                    <li>
                                                    <Avatar size="large" icon={<UserOutlined />} />
                                                    <a onClick={() => this.logoutHandle()}>Logout</a>
                                                    </li>
													{/*Header Cart Component */}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
            </div>
        )
    }
}


const mapStateToProps = () => {
    return{

    }
}

const mapDispatchToprops = dispatch => {
    return{
        logout: history => dispatch(logoutUser(history))
    }
}
export default compose(withRouter, connect(mapStateToProps,mapDispatchToprops))(Header)
