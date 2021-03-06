/* core */
import React from 'react';
/* components */
import Box from 'components/box/Box';
import Hint from 'components/hint/Hint';
import HintBox from 'components/hint/HintBox';
import { MuiForm, MuiInput, MuiSelect, MuiToggle, validations } from 'mui-form';

/*
	form
*/
class PageComponent extends React.Component {
	state = {};

	render() {
		var handleSubmit = promise => {};

		return (
			<Box box={{ title: this.props.page.title }}>
				<MuiForm stateScope={this} onSubmit={handleSubmit}>
					<div className="formSection">
						<h4>Here's the fun part - Validations!</h4>
						<fieldset>
							<p>
								A "hint", or little question mark icon which brings up a helpful-tips box will be
								included next to each field, describing its validation...
							</p>
						</fieldset>
					</div>

					<div className="formSection">
						<h4>Required or not:</h4>
						<fieldset>
							<label>
								No validation: <Hint title="No validation" description="Don't worry about it!" />
							</label>
							<MuiInput stateScope={this} name="first_text_field" type="text" />
						</fieldset>
						<fieldset>
							<label>
								This is required:{' '}
								<Hint
									title="Required"
									description="Can't be an empty string if input. Must be checked ON if toggle switch. Select box must have some option chosen."
								/>
							</label>
							<MuiSelect stateScope={this} name="proto" validations={[validations.required]}>
								<option value="DHCP">DHCP client</option>
								<option value="static">Static address</option>
								<option value="PPPoE">PPPoE</option>
							</MuiSelect>
						</fieldset>
						<fieldset>
							<label>
								This is also required:{' '}
								<Hint
									title="Required"
									description={<div><p>A toggle switch is simply a &lt;checkbox /&gt; element, styled for Material UI.</p><p>It can be used to confirm something, or open a secret section.</p></div>}
								/>
							</label>
							<MuiToggle stateScope={this} name="confirm" validations={[validations.required]} />
						</fieldset>
					</div>

					<div className="formSection">
						<h4>Regex functions:</h4>

						<fieldset>
							<label>
								Full Name:{' '}
								<Hint
									title="Full Name"
									description="Must be 2 or 3 words. Hyphens allowed. First Middle Last names. Middle is optional."
								/>
							</label>
							<MuiInput
								stateScope={this}
								name="your_fullname"
								type="text"
								validations={[validations.fullname]}
							/>
						</fieldset>

						<fieldset>
							<label>
								Zipcode: <Hint title="Zipcode" description="6 digits, no nonesense" />
							</label>
							<MuiInput
								stateScope={this}
								name="your_zipcode"
								type="text"
								validations={[validations.zipcode]}
							/>
						</fieldset>

						<fieldset>
							<label>
								Email Address:{' '}
								<Hint
									title="Email"
									description="Needs an at symbol, a period, and some characters before and after these."
									label="*required"
								/>
							</label>
							<MuiInput
								stateScope={this}
								name="your_email"
								type="text"
								validations={[validations.required, validations.email]}
							/>
						</fieldset>

						<fieldset>
							<label>
								IP v4:{' '}
								<Hint
									title="IP version 4"
									description={
										<span>
											<p>Bunch of digits and dots...</p>
											<p>
												But first, this field is required, so checked that it's not empty. Other
												validations come after. Required is validations[0]. IPv4 is validations[1]
												in the array.
											</p>
										</span>
									}
									label="*required"
								/>
							</label>
							<MuiInput
								stateScope={this}
								name="your_ipv4"
								type="text"
								validations={[validations.required, validations.ipv4]}
							/>
						</fieldset>

						<fieldset>
							<label>
								IP v6:{' '}
								<Hint
									title="IP version 6"
									description={
										<span>
											<p>Bit more complicated than IPv4...</p>
											<p>
												But first, this field is required, so checked that it's not empty. Other
												validations come after. Required is validations[0]. IPv6 is validations[1]
												in the array.
											</p>
										</span>
									}
									label="*required"
								/>{' '}
							</label>
							<MuiInput
								stateScope={this}
								name="your_ipv6"
								type="text"
								validations={[validations.required, validations.ipv6]}
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
