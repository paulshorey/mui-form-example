//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from 'components/box/Box';
import * as uiActions from 'redux/actions/ui'; 

import * as Styled from './TopStyled';
import SpecificErrorBoundary from 'components/error/SpecificErrorBoundary';

type Props = {
	nav: {}
};
class Top extends Component<Props> {
	render() {
		const { deviceInfo } = this.props;
		if (deviceInfo) {
			var DeviceInfo = (
				<Box box={{ title: 'New Luxul Product', theme: 'global' }}>
					<div className="form">
						<p>Model #: {deviceInfo.model}<br />Firmware #: {deviceInfo.firmware}</p>
						<p>This app was originally designed for Luxul Inc., in Draper UT. It had some API calls that worked with Luxul brand products.</p>
						<p>Now, it is simply a UI demo for Mui-Form ReactJS library, and a bootstrap for a modern ReactJS app.</p>
						<p>If you are on the login screen, <a href="/XWC1001/examples/validation" style={{fontWeight:"bold"}} className="color_success fix_textWrap">click here to enter the demo &raquo;</a></p>
					</div>
				</Box>
			);

			var Details = (
				<Styled.Details
					onClick={() => {
						window.store.side = { Box: DeviceInfo };
					}}
				>
					<span className="link">
						<span className="title" style={{ textIndent: '-1.5px', paddingTop: '0.1rem' }}>
							{/*<span className="fontIcon icon-carat_down" style={{color:"rgba(255, 255, 255, .3)"}} /> */}
							{deviceInfo.model}
						</span>
						<span className="text" style={{ textIndent: '-1px' }}>
							Firmware: {deviceInfo.firmware}
						</span>
					</span>
					<span className="fontIcon icon-navlink_info" />
				</Styled.Details>
			);
		}

		return (
			<SpecificErrorBoundary location="Top.js">
				<Styled.Top>
					<div>
						<Styled.Hamburger
							id="Hamburger"
							onClick={event => {
								this.props.dispatch(uiActions.UI_NAV_TOGGLE());
							}}
						>
							<div className="hamburger-icon">
								<div className="hamburger-centered">
									<div className="hamburger-top" />
									<div className="hamburger-middle" />
									<div className="hamburger-bottom" />
								</div>
							</div>
						</Styled.Hamburger>

						<Styled.Logo>
							<a href="/"><img src="/branding/logo/logo_white.svg" alt="LUXUL" /></a>
						</Styled.Logo>

						{Details || null}
					</div>
				</Styled.Top>
			</SpecificErrorBoundary>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		nav: state.ui.nav || {}
  	}
}
Top = connect(mapStateToProps)(Top);


// connect global data
// when {window.store.top} changes, update {this.state.top}
class TopConnected extends Component {
	constructor(){
		super();
		this.state = {
			deviceInfo: window.store.deviceInfo,
		};
	}
	componentWillMount() {
		window.store.watch('deviceInfo', (name, oldValue, value) => {
			this.setState({ [name]: value });
			return value;
		});
	}
	componentWillUnmount() {
		window.store.unwatch('deviceInfo');
	}
	render() {
		return <Top deviceInfo={this.state.deviceInfo} />;
	}
}
export default TopConnected;

