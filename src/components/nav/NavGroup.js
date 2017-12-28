// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router';

type Props = {
	title: string,
	children: any,
};
type State = {
	isOpen: boolean,
};

class NavGroup extends Component<Props, State> {
	state = {
		isOpen: false,
	};
	toggleOpen = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	/*
		to detect route change using react-router-dom
	*/
	componentWillMount(){
		const { history } = this.props;
		this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
		this.handleLocationChange(history.location);
	}
	componentWillUnmount() {
		if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
	}
	handleLocationChange = (location)=>{
		const urls = this.props.children.map((child, index) => {
			return child.props.to;
		});
		const activeUrl = urls.includes(location.pathname) ? true : false;
		activeUrl && this.setState({ isOpen: true });
		if (activeUrl) {
			this.setState({isActive:true});
		}
	}

	render() {
		return (
			<div className={'group' + (this.state.isOpen ? ' opened' : '') + (this.state.isActive ? ' active' : '')}>
				<div className={'title' + (this.state.isOpen ? ' active' : '')} onClick={this.toggleOpen}>
					<span className="fontIcon icon-navlink_plus" />
					<span className="fontIcon icon-navlink_minus" />
					<span>{this.props.title}</span>
				</div>
				<div className="children">{this.props.children}</div>
			</div>
		);
	}
}

export default withRouter(NavGroup);
