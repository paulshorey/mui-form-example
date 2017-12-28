/* core */
import React from 'react';
/* components */
import Box from 'components/box/Box';
import Hint from 'components/hint/Hint';
import HintBox from 'components/hint/HintBox';
import {
	MuiForm,
	MuiSelect,
	MuiToggle,
	MuiInput,
	validations,
} from 'mui-form';

/*
Very simple, receive the value and determine if it is valid
If valid, return false
If NOT valid, return true, or validation error message to be displayed next to the field
*/
var minimum4Characters = function(value) {
	if (value.length >= 4) {
		return false;
	} else {
		return 'Must have at least 4 characters';
	}
};

/*
	form
*/
class PageComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			muiFormValues: {
				some_text_field: 'Default Value',
			},
		};
	}

	render() {
		return (
			<Box box={{ title: this.props.page.title }}>
				<MuiForm stateScope={this}>
					<div className="formSection">
						<h4>&lt;MuiInput /&gt;</h4>
						<fieldset>
							<label>Some Label:</label>
							{/*
									Here, we'll add 2 validation functions. One was imported from MuiForm. Another, we created from scratch. Remember, even if adding one validation function, it has to be entered as an array!
								*/}
							<MuiInput
								stateScope={this}
								name="some_text_field"
								type="text"
								validations={[validations.required, minimum4Characters]}
							/>
						</fieldset>
					</div>

					<div className="formSection">
						<h4>&lt;MuiToggle /&gt;</h4>
						<fieldset>
							<label>First thing:</label>
							{/*
									then simply add a validation to your input element
								*/}
							<MuiToggle
								stateScope={this}
								name="first_thing"
								labelOn="ON"
								labelOff="OFF"
								validations={[validations.required]}
							/>
						</fieldset>
						<fieldset>
							{/*
									a bit different from the MuiInput though, MuiToggle only supports the "required" validation. Guess why that is?
								*/}
							<MuiToggle
								stateScope={this}
								name="second_thing"
								labelOff="Second thing: "
								validations={[validations.required]}
							/>
						</fieldset>
					</div>

					<div className="formSection">
						<h4>&lt;MuiSelect /&gt;</h4>
						<fieldset>
							<label>Choose one:</label>
							<MuiSelect
								stateScope={this}
								name="initial_choice"
								validations={[validations.required]}
							>
								<option value="">Select...</option>
								<option value="Selection 1">Selection 1</option>
								<option value="Selection 2">Selection 2</option>
								<option value="Selection 3">Selection 3</option>
							</MuiSelect>
						</fieldset>

						{this.state.muiFormValues.initial_choice === 'Selection 1' && (
							<div>
								<h4>Cool! You chose the first option.</h4>
								<fieldset>
									<label>Now you can choose something more specific:</label>
									<MuiSelect stateScope={this} name="secondary_choice">
										<option value="">Select...</option>
										<option value="1.1">1.1</option>
										<option value="1.2">1.2</option>
										<option value="1.3">1.3</option>
									</MuiSelect>
								</fieldset>
							</div>
						)}
						{this.state.muiFormValues.initial_choice === 'Selection 2' && (
							<div>
								<h4>You chose the second option.</h4>
								<fieldset>
									<label>Now if you want, try choosing a more specific:</label>
									<MuiSelect stateScope={this} name="secondary_choice">
										<option value="">Select...</option>
										<option value="2.1">2.1</option>
										<option value="2.2">2.2</option>
										<option value="2.3">2.3</option>
									</MuiSelect>
								</fieldset>
							</div>
						)}
						{this.state.muiFormValues.initial_choice === 'Selection 3' && (
							<div>
								<h4>You chose the third and last option...</h4>
								<fieldset>
									<label>
										Now optionally, lets make a secondary selection to narrow it down even more:
									</label>
									<MuiSelect stateScope={this} name="secondary_choice">
										<option value="">Select...</option>
										<option value="3.1">3.1</option>
										<option value="3.2">3.2</option>
										<option value="3.3">3.3</option>
									</MuiSelect>
								</fieldset>
							</div>
						)}
					</div>

					<div className="formSection">
						{/*
								Here's the hint tag:
							*/}
						<h4>
							&lt;Hint /&gt;
							<Hint
								title="About Hint:"
								description={
									<span>
										<p>
											You can place the Hint anywhere you want the little question mark circle icon
											to appear.
										</p>
										<p>
											Click on that little icon and a box will drop down, containing this text, or
											whatever text you include in the description field here.
										</p>
									</span>
								}
							/>
						</h4>
						<fieldset>
							{/*
									Here's the hint tag:
								*/}
							<label>
								The hint is usually placed in or near the label, before the input...
								<Hint
									title="About Hint:"
									description={
										<span>
											<p>
												Though technically, you can place the Hint anywhere you want the little
												question mark circle icon to appear.
											</p>
											<p>
												Click on that little icon and a box will drop down, containing this text, or
												whatever text you include in the description field here.
											</p>
										</span>
									}
								/>
							</label>
						</fieldset>

						<fieldset>
							<MuiInput
								stateScope={this}
								name="first_text_field"
								type="text"
								placeholder="First thing..."
							/>
						</fieldset>

						<fieldset>
							<MuiInput
								stateScope={this}
								name="second_text_field"
								type="text"
								placeholder="Second thing..."
							/>
						</fieldset>
					</div>
				</MuiForm>
				<HintBox />
			</Box>
		);
	}
}

export default PageComponent;
