/* core */
import React from 'react';
/* components */
import Box from 'components/box/Box';

/* forms */
import { MuiForm, MuiSelect, MuiInput, validations } from 'mui-form';

/*
	form
*/
class PageComponent extends React.Component {
	state = {
		muiFormValues: {
			network1: {},
			network2: {},
			lan: {},
		},
	};

	componentDidMount() {
		this._isMounted = true;

		const getData = () => {
			/*
				request: get data
			*/
			this.setState({ muiFormLoading: true });

			// this.props.ubus.get.bind(this)('examples')
			// 	.then(responseData => {
			// 		// data success
			// 		if (this._isMounted) {
			// 			for (let key in responseData.values) {
			// 				if (!this.state.muiFormValues[key]) {
			// 					delete responseData.values[key];
			// 				}
			// 			}
			// 			this.setState({
			// 				muiFormValues: responseData.values,
			// 				muiFormValuesOriginal: JSON.parse(JSON.stringify(responseData.values)),
			// 				muiFormConnectionFailed: false,
			// 				muiFormLoading: false,
			// 			});
			// 			// this.props.dispatch(layoutActions.message({}));
			// 		}
			// 	})
			// 	.catch(() => {});
			// .catch((err)=>{
			// 	// data failed
			// 	if (this._isMounted) {
			// 		this.setState({"muiFormConnectionFailed": true, "muiFormLoading": false});
			// 		this.props.history.push('/login');
			// 		this.props.dispatch(layoutActions.message({title:"Connection failed. Please check that your device is connected and powered on.", status:1}));
			// 		// getData();
			// 	}
			// })
		};
		getData();
	}

	componentWillUnmount() {
		// we DO need this. After the component dismounts, "this" scope still exists if any lingering references to it remain (such as in an AJAX or setTimeout)
		this._isMounted = false;
	}

	render() {
		// var { dispatch } = this.props;

		const handleSubmit = valid => {
			/*
				request: set data
			*/
			this.setState({ muiFormSubmitting: true });
			// dispatch(layoutActions.message({}));
			valid
				.then(event => {
					// form is VALID
					for (var section in this.state.muiFormValues) {
						if (section && this.state.muiFormValues[section]) {
							const values = this.state.muiFormValues[section];

							// OK, do custom action
							this.props.ubus.set.bind(this)('examples', section, values)
								.then(action => {
									// action success
									// dispatch(layoutActions.message({status:0, message:"Success!"}));
									this.setState({
										muiFormSubmitting: false,
										muiFormSubmitAttempted: false,
										muiFormValuesOriginal: JSON.parse(JSON.stringify(this.state.muiFormValues)),
									});
								})
								.catch(err => {
									// action failed
									// dispatch(layoutActions.message({title:"Request failed. Please check that your device is connected and powered on.", status:1}));
									this.setState({ 
										muiFormSubmitting: false,
										muiFormSubmitAttempted: false,
									});
								});
						}
					}
				})
				.catch(err => {
					// form is NOT valid
					console.error('Error: ' + err);
				});
		};

		return (
			<Box box={{ title: this.props.page.title }}>
				<MuiForm stateScope={this} onSubmit={handleSubmit}>
					<div className="formSection">
						<h4>Interfaces</h4>
						<li>This "submit" button actually tries to connect to the device and edit several config sections at once. It works when physically connected to the device, and logged in. But here is a good example of what happens when a request fails.</li>
						<li>On page load, it should connect to the device and pre-fill the form fields with real data. But, that is turned off so you don't get kicked out to the login page.</li>
					</div>

					<div className="formSection">
						<h4>Network1</h4>
						<fieldset className="info">
							<label>SSID:</label>
							<MuiInput
								stateScope={this}
								name="network1.ssid"
								type="text"
								placeholder="Type something"
								validations={[validations.required]}
							/>
						</fieldset>
					</div>

					<div className="formSection">
						<h4>Network2</h4>
						<fieldset className="info">
							<label>SSID:</label>
							<MuiInput
								stateScope={this}
								name="network2.ssid"
								type="text"
								placeholder="Type something else"
								validations={[validations.required]}
							/>
						</fieldset>
					</div>

					<div className="formSection">
						<h4>LAN</h4>
						<fieldset className="info">
							<label>Protocol:</label>
							<MuiSelect stateScope={this} name="lan.proto" validations={[validations.required]}>
								<option value="DHCP">DHCP client</option>
								<option value="static">Static address</option>
								<option value="PPPoE">PPPoE</option>
							</MuiSelect>
						</fieldset>
						<fieldset className="info">
							<label>IPv4 address:</label>
							<MuiInput
								stateScope={this}
								name="lan.ip"
								type="text"
								placeholder="0.0.0.0"
								validations={[validations.required, validations.ipv4]}
							/>
						</fieldset>
						<fieldset className="info">
							<label>IPv4 netmask:</label>
							<MuiSelect
								stateScope={this}
								name="lan.netmask"
								validations={[validations.required, validations.ipv4]}
							>
								<option value="">Select...</option>
								<option value="255.255.255.0">255.255.255.0</option>
								<option value="255.255.0.0">255.255.0.0</option>
								<option value="255.0.0.0">255.0.0.0</option>
								<option value="255.255.128.0">255.255.128.0</option>
								<option value="255.255.192.0">255.255.192.0</option>
								<option value="255.255.224.0">255.255.224.0</option>
								<option value="255.255.240.0">255.255.240.0</option>
								<option value="255.255.248.0">255.255.248.0</option>
								<option value="255.255.252.0">255.255.252.0</option>
								<option value="255.255.254.0">255.255.254.0</option>
							</MuiSelect>
						</fieldset>
					</div>
				</MuiForm>
			</Box>
		);
	}
}

export default PageComponent;
