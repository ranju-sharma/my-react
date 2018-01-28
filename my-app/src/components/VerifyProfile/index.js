import React from 'react';
import ReactDOM from 'react-dom';
import s from './style';


class VerifyProfile extends React.Component {
	render() {
		return(
			<div>
				<s.ProfileWrap>
					<s.HeadingWrap>Verify your Profile Information</s.HeadingWrap>
					<s.Headingbtn>and Help build safer Platform
						<s.TooltipWrap>
							<p>using two styling technologies is in my opinion a real problem.using two styling technologies is in my opinion a real problem.</p>
						</s.TooltipWrap>
					</s.Headingbtn>
					<s.InfoWrap>
						Profile Name <s.NameInput></s.NameInput>
					</s.InfoWrap>
					<s.InfoWrap>
						Mobile number <s.NameInput></s.NameInput>
					</s.InfoWrap>
					<s.InfoWrap>
						Date of birth <s.NameInput></s.NameInput>
					</s.InfoWrap>
				</s.ProfileWrap>
			</div>
		)
	} 

}

export default VerifyProfile;