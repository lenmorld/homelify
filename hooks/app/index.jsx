import React from "react";
import ReactDOM from "react-dom";

import { UseState, UseEffect, UseEffect2 } from "./Hooks";

// import App from "./App";

class Home extends React.Component {
	render() {
		return (
			<div>
				{/* <UseState /> */}
				<UseEffect2 />
			</div>
		);
	}
}

ReactDOM.render(<Home />, document.getElementById("app"));
