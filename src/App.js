import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
	const [clics, setClics] = useState(0);

	const handleClick = () => {
		setClics(clics+1);
	};
	const restartClick = () => {
		setClics(0);
	};

	return (
		<div className="App">
			<div className="container-main">
				<Counter clics={clics}/>
				<Button text="Clic" isButtonClic={true} handleClick={handleClick} />

				<Button text="Reiniciar" isButtonClic={false} handleClick={restartClick} />
			</div>
		</div>
	);
}

export default App;
