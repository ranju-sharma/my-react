import React from 'react';
//import ReactDOM from 'react-dom';
import AccountSetting from '../AccountSetting';
import PrivacyOptions from '../PrivacyOptions';
import Style from './style.css';

class ListPage extends React.Component {
 constructor() {
 	super();
 	this.onClickSetting = this.onClickSetting.bind(this);
 	this.onClicksmsAlert = this.onClicksmsAlert.bind(this); 
 	//this.privacyonClick = this.privacyonClick.bind(this); 	
 	this.state = {
 		  Setting : false,
 		  smsAlert : false,
 		  //privacy : false
 	};
 }

// onClickHandler() {
// 	const { emailSetting, smsAlert } = this.state;
//     this.setState({ 
//     	emailSetting: !emailSetting,
//     	smsAlert : !smsAlert
//      });
// }

onClickSetting() {
	const { Setting } = this.state;
    this.setState({ 
    	Setting: true,
    	smsAlert: false
     });
}

onClicksmsAlert() {
	const { smsAlert } = this.state;
    this.setState({ 
    	smsAlert: true,
    	Setting: false
     });
}

// privacyonClick() {
// 	const { privacy } = this.state;
//     this.setState({ 
//     	privacy:true,
//     	smsAlert: false,
//     	Setting: false
//      });
// }



 render() { 	
	
  return(
  		<div className="container-wrap">
			<div className="container-inner">
		        <ul>
		        	<li onClick={this.onClickSetting}>Settings</li>
		        	<li onClick={this.onClicksmsAlert}><a>Email / SMS Alerts</a></li>
		        	<li onClick={this.privacyonClick} className={!this.state.Setting}><a>Privacy Options</a></li>
		        	<li><a>Horoscope Settings</a></li>
		        	<li><a>Hide / Delete Profile</a></li>
		        </ul>
		    </div>
		    <div>
		    	<div className={this.state.Setting ? 'show container-right' : 'hide' }>Lets create a simple Avatar component which shows a Facebook page picture and name using the Facebook Graph API.
		    	</div>
		    </div>	
		    <div className={this.state.smsAlert ? 'show ' : 'hide'}>{this.state.smsAlert ? <AccountSetting /> : null}</div>
		 </div>
		)
  	}
 } 


export default ListPage;