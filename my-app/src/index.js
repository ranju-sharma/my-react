import React from 'react';
import ReactDOM from 'react-dom';
import ListPage from './components/ListPage';


class MenuBar extends React.Component {
	render() {
		return(
			<h1><ListPage /></h1>
		)
	} 

}

ReactDOM.render(<MenuBar />,document.getElementById('my-page'));