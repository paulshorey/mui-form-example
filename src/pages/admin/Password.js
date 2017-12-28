/* core */
import React from 'react';
/* components */
import Box from 'components/box/Box';

/* forms */
import { MuiForm, MuiInput, validations } from 'mui-form';

/*
	form
*/
class PageComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			muiFormValues: {
				password1: '',
				password2: '',
			},
		};
	}

	render() {
		return (
			<Box box={{ title: this.props.page.title }}>
				<MuiForm stateScope={this}>
					<div className="formSection">
						<fieldset className="info">
							<label className="">Password:</label>
							<span>
								<MuiInput
									stateScope={this}
									name="password1"
									type="password"
									validations={[validations.required]}
								/>
							</span>
						</fieldset>
						<fieldset className="info">
							<label className="">Confirm Password:</label>
							<span>
								<MuiInput
									stateScope={this}
									name="password1"
									type="password"
									validations={[validations.required]}
								/>
							</span>
						</fieldset>
					</div>

					<p>&nbsp;</p>
				</MuiForm>
			</Box>
		);
	}
}

export default PageComponent;
