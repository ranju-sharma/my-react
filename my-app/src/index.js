import React from 'react';
import ReactDOM from 'react-dom';
import ListPage from './components/ListPage';
import VerifyProfile from './components/VerifyProfile';


class MenuBar extends React.Component {
	render() {
		return(
			<div>
				<ListPage />
				<VerifyProfile />
			</div>
		)
	} 

}

ReactDOM.render(<MenuBar />,document.getElementById('my-page'));