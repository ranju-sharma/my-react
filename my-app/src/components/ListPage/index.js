import React from 'react';
//import ReactDOM from 'react-dom';
import AccountSetting from '../AccountSetting';
import PrivacyOptions from '../PrivacyOptions';
import Style from './style.css';

class ListPage extends React.Component {
 constructor() {
 	super();
 	//this.onClickSetting = this.onClickSetting.bind(this);
 	this.onClicksmsAlert = this.onClicksmsAlert.bind(this); 
 	this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
 	//this.privacyonClick = this.privacyonClick.bind(this); 	
 	this.state = {
 		  Setting : false,
 		  smsAlert : false,
 		  popupVisible: false
 	};
 }

onClicksmsAlert() {
	const { smsAlert } = this.state;
    this.setState({ 
    	smsAlert: true,
    	Setting: false
     });
}

handleClick() {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
       popupVisible: !prevState.popupVisible,
       Setting: true,
    	smsAlert: false
    }));
  }
  
   handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }    
    this.handleClick();
  }


 render() { 	
	
  return(
  		<div className="container-wrap">
			<div className="container-inner" ref={node => { this.node = node; }}>
		        <ul>
		        	<li onClick={this.handleClick}>Settings</li>
		        	<li onClick={this.onClicksmsAlert}><a>Email / SMS Alerts</a></li>
		        	<li onClick={this.privacyonClick} className={!this.state.Setting}><a>Privacy Options</a></li>
		        	<li><a>Horoscope Settings</a></li>
		        	<li><a>Hide / Delete Profile</a></li>
		        </ul>
		    </div>
		    <div>
		    	{this.state.popupVisible && (<div className={this.state.Setting ? 'show container-right' : 'hide' } click={this.state.popupVisible}>Lets create a simple Avatar component which shows a Facebook page picture and name using the Facebook Graph API.
		    	</div>
         )}
		    </div>	
		    <div className={this.state.smsAlert ? 'show ' : 'hide'}>{this.state.smsAlert ? <AccountSetting /> : null}</div>
		 </div>
		)
  	}
 } 


export default ListPage;