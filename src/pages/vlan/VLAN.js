/* core */
import React from 'react';
/* components */
import Box from 'components/box/Box';
/* forms */
import { MuiForm, MuiInput, MuiToggle } from 'mui-form';

/*
	form
*/
class PageComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			muiFormValues: {
				vlanTaggingOptions: false,
				vlan24Ghz: 1,
				vlan50Ghz: 1,
			},
			muiFormButtons: {
				submit: 'Apply',
			},
		};
	}

	render() {
		var MoreFormSections = (
			<div>
				<div className="formSection withHr">
					<h4>2.4GHz VLAN</h4>
					<fieldset className="info">
						<label className="">SSID</label> <span>VLAN ID (1-4080)</span>
					</fieldset>
					<fieldset className="info">
						<label className="">mui-2G</label>{' '}
						<span>
							<MuiInput stateScope={this} name="vlan24Ghz" type="text" />
						</span>
					</fieldset>
				</div>
				<div className="formSection withHr">
					<h4>5GHz VLAN</h4>
					<fieldset className="info">
						<label className="">SSID</label>
						<span>VLAN ID (1-4080)</span>
					</fieldset>
					<fieldset className="info">
						<label className="">mui-5G</label>
						<span>
							<MuiInput stateScope={this} name="vlan50Ghz" type="text" />
						</span>
					</fieldset>
				</div>
			</div>
		);

		return (
			<Box box={{ title: this.props.page.title }}>
				<MuiForm onSubmit={() => {}} stateScope={this}>
					<div className="formSection">
						<h4>VLAN Tagging for Virtual SSIDs</h4>
						<fieldset style={{ paddingLeft: '0' }}>
							<MuiToggle
								stateScope={this}
								name="vlanTaggingOptions"
								labelOn="Enabled"
								labelOff="Disabled (default) "
							/>
						</fieldset>
					</div>

					{this.state.muiFormValues.vlanTaggingOptions && MoreFormSections}

					<p>&nbsp;</p>
				</MuiForm>
			</Box>
		);
	}
}

export default PageComponent;
