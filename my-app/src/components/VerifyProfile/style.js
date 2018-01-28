import styled from 'styled-components';

const styles = {};

styles.ProfileWrap = styled.div`
  width: 500px;
  box-shadow: 0 1px 2px rgba(43, 59, 93, 0.29);
  margin: 20px auto 0;
  padding: 21px 40px;
  text-align:center;
`;

styles.HeadingWrap = styled.div`
  font: normal 20px arial;
`;

styles.Headingbtn = styled.div`
	font: normal 16px/25px arial;
	display: flex;
	justify-content: center;
	align-items: center;
`;

styles.TooltipWrapbtn = styled.div`
  font: normal 16px/25px arial;
  color:red;
  display:none;
`;


styles.TooltipWrap = styled.span`
	position: relative;
	display: inline-block;
	padding: 10px;
	background: #252222;
	margin: 0 0 0 5px;
	border-radius: 50%;
	cursor: pointer;
	> p {
		padding:10px;
		background:#363636;
		color:#fff;
		visibility: hidden;
		position:absolute;
		font:normal 12px arial;
		width:200px;
		left: -14px;
		top: 20px;
		&:after {
		    content: '';
			width: 13px;
		    height: 13px;
		    position: absolute;
		    transform: rotate(48deg);
		    background: red;
		    top: -6px;
		    z-index: -1;
		    left: 19px;
		    background: #363636;
		}
	}
	&:hover {
		background:red;
		> p {
			visibility: visible;

		}
	}
`;

styles.InfoWrap = styled.div`
	width: 300px;
    margin: 20px auto 0;
    text-align: left;
`;

styles.NameInput = styled.input`
	width: 150px;
	border:1px solid #b1b3b9;
    text-align: left;
    padding:5px;
`;

export default styles;