// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavGroup from './NavGroup';
import * as Styled from './NavStyled';
import * as uiActions from 'redux/actions/ui';

type Props = {
	routes: [], // list of routes/urls/components from src/devices
	ui: {}, // window.store.ui from redux
};

export class Nav extends Component<Props> {
	renderLinks = (links: any) => {
		return links.map((link, index) => {
			return (
				<NavLink
					key={link.url + index}
					className="title link"
					activeClassName="active"
					to={link.url}
					onClick={() => {
						this.props.dispatch(uiActions.UI_NAV_CLOSE());
					}}
				>
					<span className="fontIcon icon-navlink_dot" />
					<span>{link.title}</span>
				</NavLink>
			);
		});
	};

	renderNav() {
		const { routes } = this.props;
		return routes.map((link, index) => {
			if (link.children) {
				return (
					<NavGroup key={link.title + index} title={link.title}>
						{this.renderLinks(link.children)}
					</NavGroup>
				);
			} else {
				return this.renderLinks([link]);
			}
		});
	}

	render() {
		return (
			<Styled.Nav
				className={'nav_left' + (this.props.ui && this.props.ui.nav.opened ? '' : ' closed')}
			>
				{this.renderNav()}
			</Styled.Nav>
		);
	}
}

const mapStateToProps = state => {
	return {
		ui: state.ui || {},
	};
};

export default connect(mapStateToProps)(Nav);
