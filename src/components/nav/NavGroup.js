// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router';

type Props = {
	title: string,
	children: any,
};
type State = {
	isOpen: boolean,
	isActive: boolean
};
class NavGroup extends Component<Props, State> {
	constructor(props){
		super(props);
		this.state = {};
	}
	toggleOpen = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	/*
		to detect route change using react-router-dom
	*/
	updateLocation(location){
		const urls = this.props.children.map((child, index) => {
			return child.props.to;
		});
		const activeUrl = urls.includes(this.props.history.location.pathname) ? true : false;
		if (activeUrl) {
			this.setState({isActive:true,isOpen:true});
		}
	}
	componentWillMount(){
		const { history } = this.props;
		this.unsubscribeFromHistory = history.listen(this.updateLocation.bind(this));
		this.updateLocation.bind(this)(history.location);
	}
	componentWillUnmount() {
		if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
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
