/* core */
import React from 'react';
/* components */
import Box from 'components/box/Box';

/* forms */
import { MuiForm, MuiInput } from 'mui-form';
import * as Styled from './PageLoginStyled';

/*
	form
*/
class PageComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			muiFormButtons: {
				submit: ' Enter',
				reset: false,
			},
		};
	}

	render() {
		var { history } = this.props;

		setTimeout(()=>{
			window.store.message = {
				title: <span><span className="icon-warning"></span> This app is not-functional without the Mui hardware. <a href="/XWC1001/examples/validation" style={{fontWeight:"bold"}} className="color_success fix_textWrap">CLICK HERE TO ENTER the DEMO &raquo;</a> </span>,
				type: 'warning'
			};
		},3000);

		var formSubmit = valid => {
			console.warn('submitting...');
			this.setState({ muiFormSubmitting: true });
			window.store.message = {};
			valid
				.then(event => {
					// form is valid
					this.props.ubus
						.login(this.state.muiFormValues)
						.then(action => {
							this.setState({ muiFormSubmitting: false });
							history.push('/' + window.store.deviceInfo.model + '/status/controller');
						})
						.catch(err => {
							// dispatch(layoutActions.message({title:"Login failed. Please check that your device is connected and powered on.", status:1}));
							this.setState({ muiFormSubmitting: false });
							window.store.message = {
								title: 'Login failed. Please check that your device is connected and powered on.',
								type: 'error',
							};
						});
				})
				.catch(err => {
					// form is NOT valid
					console.error('Error: ' + err);
				});
		};

		var HelpBox = (
			<Box box={{ title: 'Login Help' }}>
				<div className="form" style={{ minWidth: '200px' }}>
					<p>
						Username: root<br />Password: admin
					</p>
				</div>
			</Box>
		);
		const TopChildren = [
			<span
				key="Login Help"
				className="fontIcon icon-pk_question"
				onClick={() => {
					window.store.side = { Box: HelpBox };
				}}
			/>,
		];

		return (
			<Styled.PageLogin>
				<Box box={{ title: 'Login', id: 'boxLogin', TopChildren: TopChildren }}>
					<MuiForm stateScope={this} onSubmit={formSubmit}>
						<div className="formSection">
							<fieldset>
								<label>Username:</label>
								<MuiInput stateScope={this} name="username" type="text" />
							</fieldset>
							<fieldset>
								<label>Password:</label>
								<MuiInput stateScope={this} name="password" type="password" />
							</fieldset>
						</div>
					</MuiForm>
				</Box>
			</Styled.PageLogin>
		);
	}
}

export default PageComponent;
