import './App.css';
import * as Identicon from "identicon.js";
import { v4 as uuid } from 'uuid';

function Icon(props) {
	const data = new Identicon(props.id, 420).toString();
	return (<img className='identicon' src={`data:image/png;base64,${data}`} />)
}

function Generator(size = 25) {
	return new Array(size).fill().map((id, index) => (<Icon id={uuid()} key={index} />));
}

function App() {
	return (
		<div className="App">
			{Generator()}
		</div>
	);
}

export default App;
