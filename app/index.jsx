import React from "react";
import ReactDOM from "react-dom";

import Homes from "./Homes";

class App extends React.Component {
	render() {
		return <Homes />;
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
