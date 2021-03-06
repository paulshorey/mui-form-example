/* core */
import React from 'react';
/* components */
import Box from 'components/box/Box';
import Hint from 'components/hint/Hint';
import HintBox from 'components/hint/HintBox';
import {
	MuiForm,
	MuiInput,
	MuiToggle,
	MuiButton,
	validations,
} from 'mui-form';

/*
	form
*/
class PageComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			muiFormButtons: false
		};
	}

	render() {
		var showBox_edit = AP => {
			class PopupForm extends React.Component {
				constructor() {
					super();
					this.state = {
						muiFormValues: {
							name: AP.name,
							enableSSID: true,
							broadcast: true,
							clientIsolation: true,
						},
					};
				}
				render() {
					return (
						<Box box={{ title: 'Edit SSID:' }}>
							<MuiForm onSubmit={() => {}} stateScope={this}>
								<div className="formSection">
									<fieldset className="info">
										<label className="">
											Name:{' '}
											<Hint
												title="Hint..."
												description={
													<span>
														<p>???</p>
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
											Enable SSID:{' '}
											<Hint
												title="Hint..."
												description={
													<span>
														<p>???</p>
													</span>
												}
											/>
										</label>
										<span>
											<MuiToggle stateScope={this} name="enableSSID" />
										</span>
									</fieldset>
									<fieldset className="info">
										<label className="">
											Broadcast:{' '}
											<Hint
												title="Hint..."
												description={
													<span>
														<p>???</p>
													</span>
												}
											/>
										</label>
										<span>
											<MuiToggle stateScope={this} name="broadcast" />
										</span>
									</fieldset>
									<fieldset className="info">
										<label className="">
											Broadcast:{' '}
											<Hint
												title="Hint..."
												description={
													<span>
														<p>???</p>
													</span>
												}
											/>
										</label>
										<span>
											<MuiToggle stateScope={this} name="clientIsolation" />
										</span>
									</fieldset>
									<fieldset className="info">
										<label className="">
											WPA Passphrase:{' '}
											<Hint
												title="Hint..."
												description={
													<span>
														<p>???</p>
													</span>
												}
											/>
										</label>
										<span>
											<MuiInput
												stateScope={this}
												name="wpaPassphrase"
												type="text"
												validations={[validations.required]}
											/>
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

		var showBox_delete = AP => {
			class PopupForm extends React.Component {
				constructor() {
					super();
					this.state = {
						muiFormValues: {
							confirm: false,
						},
						muiFormButtons: {
							submit: false,
						},
					};
				}
				render() {
					return (
						<Box box={{ title: 'Edit SSID:' }}>
							<MuiForm onSubmit={() => {}} stateScope={this}>
								<div className="formSection">
									<fieldset className="info">
										<label>Delete "{AP.name}"?</label>
									</fieldset>
								</div>
								<div className="formSubmit">
									<MuiButton className="delete" type="submit">
										<b>Delete</b>
									</MuiButton>
								</div>
							</MuiForm>
						</Box>
					);
				}
			}
			window.store.popup = { Box: <PopupForm /> };
		};

		/* 
			raw data
			this format is only assumed - dummy data
			will have to redo this logic to filter the actual format
		*/
		var aps = [
			{
				ssid: 'mui-2G',
				band: '2.5GHz',
				security: 'WPA2',
				encryption: 'AES',
				guest: 'No',
			},
			{
				ssid: 'mui-5G',
				band: '5GHz',
				security: 'WPA2',
				encryption: 'AES',
				guest: 'No',
			},
		];
		var Rows = [];
		for (var i = 0; i < aps.length; i++) {
			// var n = i+1;
			// var odd = n%2;
			Rows.push(
				<div className="formSection withHr" key={'aps' + i}>
					<h4>{aps[i].ssid}</h4>
					<fieldset className="info">
						<label className="">SSID:</label> <span>{aps[i].ssid}</span>
					</fieldset>
					<fieldset className="info">
						<label className="">Band:</label> <span>{aps[i].band}</span>
					</fieldset>
					<fieldset className="info">
						<label className="">Security:</label> <span>{aps[i].security}</span>
					</fieldset>
					<fieldset className="info">
						<label className="">Encryption:</label> <span>{aps[i].encryption}</span>
					</fieldset>
					<fieldset className="info">
						<label className="">Guest:</label> <span>{aps[i].guest}</span>
					</fieldset>
					<fieldset className="info">
						<label className="" />{' '}
						<span>
							<MuiButton
								className="small primary"
								onClick={() => {
									showBox_edit({
										name: 'ABC-123 "A"',
										image: '/images/product-icons/ap/XAP-1510.png',
									});
								}}
							>
								<b>Modify</b>
							</MuiButton>
							<MuiButton
								className="small "
								onClick={() => {
									showBox_delete({
										name: 'ABC-123 "A"',
										image: '/images/product-icons/ap/XAP-1510.png',
									});
								}}
							>
								<b>Delete</b>
							</MuiButton>
						</span>
					</fieldset>
				</div>
			);
		}

		return (
			<Box box={{ title: this.props.page.title }}>
				<MuiForm stateScope={this}>
					<div className="formSection">
						<fieldset className="info">
							<label className="">Profile Name:</label> <span>mui</span>
						</fieldset>
					</div>

					{Rows}

					<p>&nbsp;</p>
				</MuiForm>
			</Box>
		);
	}
}

export default PageComponent;
