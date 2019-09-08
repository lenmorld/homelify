import React from "react";
import axios from "axios";

class Homes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			homes: []
		};
	}

	// TODO: use hooks here
	componentDidMount() {
		axios.get("/api/items").then(res => {
			this.setState({
				homes: res.data
			});
		});
	}

	render() {
		return (
			<div>
				<h1>Find homes here!</h1>
				<hr />
				{this.state.homes.map(home => (
					<div key={home.id}>
						<h3>
							{home.address} : {home.price}
						</h3>
						<img loading="lazy" src={home.thumbnail} />
					</div>
				))}
			</div>
		);
	}
}

export default Homes;
