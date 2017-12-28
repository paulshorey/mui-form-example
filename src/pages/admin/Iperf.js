/* core */
import React from 'react';
/* components */
import Box from 'components/box/Box';

/* forms */
import { MuiForm, MuiSelect } from 'mui-form';

/*
	form
*/
class PageComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			muiFormValues: {
				ledStatus: '1',
			},
		};
	}

	render() {
		return (
			<Box box={{ title: this.props.page.title }}>
				<MuiForm stateScope={this}>
					<div className="formSection">
						<fieldset className="info">
							<label className="">Status:</label> <span>Not Running</span>
						</fieldset>
						<fieldset className="info">
							<label className="">Run for:</label>
							<span>
								<MuiSelect stateScope={this} name="ledStatus">
									<option value="1">1 hour</option>
									<option value="2">2 hours</option>
									<option value="3">3 hours</option>
								</MuiSelect>
							</span>
						</fieldset>
						<fieldset className="info">
							<label className="" />
							<span>
								<button className="primary">
									<b>Start Iperf Server</b>
								</button>
							</span>
						</fieldset>
					</div>
				</MuiForm>
			</Box>
		);
	}
}

export default PageComponent;
