//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as uiActions from 'redux/actions/ui'; 

import Top from 'components/layout/components/Top';
import Bottom from 'components/layout/components/Bottom';
import Nav from 'components/nav/Nav';
import Message from 'components/layout/components/Message';
import Side from 'components/layout/components/Side';
import Popup from 'components/layout/components/Popup';
import SpecificErrorBoundary from 'components/error/SpecificErrorBoundary';

import * as Styled from './LayoutStyled';

type Props = {
	ui: {}
};
class Layout extends Component<Props> {
	render() {
		var { history } = this.props;
		return (
			<Styled.Layout>
				<SpecificErrorBoundary location="Layout.js">
					<Message history={history} />
					<div
						className={'layout_container' + (this.props.routes ? ' withNav' : ' noNav')}
						tabIndex={0}
						onKeyDown={e => {
							if (e.keyCode === 27) {
								/*this.props.dispatch( layoutActions.popupBox({}) );*/
							}
						}}
					>
						<Top history={history} />

						<div className="layout_content">
							{this.props.routes && (
								<Nav history={history} routes={this.props.routes} />
							)}

							<div
								className="page"
								onClick={() => {
									this.props.dispatch(uiActions.UI_NAV_CLOSE());
								}}
							>
								{this.props.children}
							</div>
						</div>

						<Bottom history={history} routes={this.props.routes} />

						<Side history={history} />
						<Popup history={history} />
					</div>
				</SpecificErrorBoundary>
			</Styled.Layout>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ui: state.ui || {}
  	}
}

export default connect(mapStateToProps)(Layout);

