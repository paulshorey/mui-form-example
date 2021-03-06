/* core */
import React from 'react';
/* components */
import Box from 'components/box/Box';
import Hint from 'components/hint/Hint';
import HintBox from 'components/hint/HintBox';

/* form */
import {
	MuiForm,
	MuiInput,
	MuiSelect,
	validations,
	MuiButton,
} from 'mui-form';

/*
	form
*/
class PageComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			muiFormValues: {
				ledStatus: '0',
			},
			muiFormButtons: false
		};
	}

	render() {
		var showBox_editAP = AP => {
			class PopupForm extends React.Component {
				constructor() {
					super();
					this.state = {
						muiFormValues: {
							name: AP.name,
							ledStatus: '0',
						},
					};
				}
				render() {
					return (
						<Box box={{ title: 'Edit AP:' }}>
							<MuiForm onSubmit={() => {}} stateScope={this}>
								<div className="formSection">
									<fieldset className="info">
										<label className="">
											Name:{' '}
											<Hint
												title="Wireless Profile"
												description={
													<span>
														<p>
															Enter the name you'd like to assign to the Profile (i.e. Default
															Profile or Building Lobby or Warehouse, etc.)
														</p>
														<p>
															The Profile Name is case sensitive and must consist of 2-32
															alphanumeric characters and/or spaces
														</p>
													</span>
												}
											/>
										</label>
										<span>
											<MuiInput
												stateScope={this}
												name="name"
												type="text"
												validations={[validations.required]}
											/>
										</span>
									</fieldset>
									<fieldset className="info">
										<label className="">
											LED Status:{' '}
											<Hint
												title="LED Status"
												description={
													<span>
														<p>
															LED status allows the session to turn the external LEDs off if
															desired. The LEDs are on by default for ease of setup.
														</p>
													</span>
												}
											/>
										</label>
										<span>
											<MuiSelect stateScope={this} name="ledStatus">
												<option value="1">ON</option>
												<option value="0">OFF</option>
											</MuiSelect>
										</span>
									</fieldset>
								</div>
							</MuiForm>
							<HintBox />
						</Box>
					);
				}
			}
			window.store.popup = { Box: <PopupForm /> };
		};

		return (
			<Box box={{ title: this.props.page.title }}>
				<MuiForm stateScope={this}>
					{/* <div className="formSection">
							<fieldset className="info">
								<label className="">Profile Name:</label> <span>mui</span>
							</fieldset>
							<fieldset className="info">
								<label className="">LED Status: <Hint title="LED Status" description={<span><p>LED status allows the session to turn the external LEDs off if desired. The LEDs are on by default for ease of setup.</p></span>} /></label>
								<span><MuiSelect stateScope={this} name="ledStatus"><option value="1">ON</option><option value="0">OFF</option></MuiSelect></span>
							</fieldset>
						</div> */}

					<div className="formSection">
						<h4>Unassigned APs:</h4>

						<fieldset className="MuiRows assignAPs" style={{ paddingLeft: '0' }}>
							<div>
								<table>
									<tbody>
										<tr style={{ border: 'solid 1px grey', background: '#efefef' }}>
											<td>
												<img src="/images/product-icons/ap/XAP-1510.png" alt="XAP-1510" />
											</td>
											<td>
												<span className="textValign">XAP-1510 "A"</span>
											</td>
											<td>
												<b
													style={{ cursor: 'pointer' }}
													onClick={() => {
														showBox_editAP({
															name: 'ABC-123 "A"',
															image: '/images/product-icons/ap/XAP-1510.png',
														});
													}}
												>
													<span className="fontIcon icon-ui_edit" />{' '}
													<span className="only-large">modify</span>
												</b>
											</td>
											<td style={{ width: '9rem', textAlign: 'right' }}>
												<MuiButton
													style={{ margin: '0.5rem', boxShadow: 'none' }}
													type="button"
													className="primary small"
												>
													<b>
														<span className="fontIcon icon-arrow-down2" /> <span>Assign</span>
													</b>
												</MuiButton>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</fieldset>
					</div>

					<div className="formSection withHr">
						<h4>Assigned APs:</h4>

						<fieldset className="MuiRows assignAPs" style={{ paddingLeft: '0' }}>
							<div>
								<table>
									<tbody>
										<tr style={{ border: 'solid 1px grey', background: '#efefef' }}>
											<td>
												<img src="/images/product-icons/ap/XAP-1510.png" alt="XAP-1510" />
											</td>
											<td>
												<span className="textValign">XAP-1510 "B"</span>
											</td>
											<td>
												<b
													style={{ cursor: 'pointer' }}
													onClick={() => {
														showBox_editAP({
															name: 'XYZ-789 "B"',
															image: '/images/product-icons/ap/XAP-1510.png',
														});
													}}
												>
													<span className="fontIcon icon-ui_edit" />{' '}
													<span className="only-large">modify</span>
												</b>
											</td>
											<td style={{ width: '9rem', textAlign: 'right' }}>
												<MuiButton
													style={{ margin: '0.5rem', boxShadow: 'none' }}
													type="button"
													className="primary small"
												>
													<b>
														<span className="fontIcon icon-arrow-up2" /> <span>Un-Assign</span>
													</b>
												</MuiButton>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</fieldset>
					</div>

					<p>&nbsp;</p>
				</MuiForm>
				<HintBox />
			</Box>
		);
	}
}

export default PageComponent;
