import React from "react";
import "../stylesheets/Button.css"

function Button({ text, isButtonClic, handleClick }) {
	return (
		<button className={isButtonClic ? "button-clic" : "button-restart"}
        onClick={handleClick}>
			{text}
		</button>
	);
}

export default Button;
