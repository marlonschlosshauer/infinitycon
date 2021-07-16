import './App.css';
import * as Identicon from "identicon.js";
import { v4 as uuid } from 'uuid';

function Icon(props) {
	const data = new Identicon(props.id, 420).toString();
	return (<img className='identicon' src={`data:image/png;base64,${data}`} />)
}

function App() {
	return (
		<div className="App">
			<Icon id={uuid()} />
		</div>
	);
}

export default App;
