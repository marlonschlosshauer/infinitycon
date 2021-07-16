import './App.css';
import * as Identicon from "identicon.js";
import { v4 as uuid } from 'uuid';

import { useState, useEffect, useRef } from 'react';

const Icon = (props) => {
	return (<img className='identicon' src={`data:image/png;base64,${new Identicon(props.id, 420).toString()}`} />)
}

const Generator = (size = 25) => {
	return new Array(size).fill().map((id, index) => (<Icon id={uuid()} key={index} />));
}

const isBottom = (ref) => ref.current && ref.current.getBoundingClientRect().bottom <= (window.innerHeight * 1.7);

const Infinite = ({ onBottomHit }) => {
	const contentRef = useRef(null);

	useEffect(() => {
		onBottomHit();
		document.addEventListener('scroll', () => {
			if (isBottom(contentRef)) {
				onBottomHit();
			};
		});
	}, []);
	return <div ref={contentRef}></div>;
}

const App = () => {
	const [icons, setIcons] = useState([]);
	return (
		<div className="App">
			{icons}
			<Infinite onBottomHit={() => setIcons(i => ([...i, Generator()]))} />
		</div>
	);
}

export default App;
