/**
 * useEffect part2 with a render props
 * but we can see here that the render prop is quite overkill
 * since the fetch logic is already separated in the effect (function inside useEffect)
 *
 */

import React, { useState, useEffect } from "react";
import axios from "axios";

const GIPHY_API_KEY = "MPHyugKqout4DfiKhja9Oy33uLghaigg";
const SEARCH_QUERY = "squidward";
const RESULTS_LIMIT = 3;

const DataLoader = props => {
	const [memes, setMemes] = useState([]);
	axios("");
	useEffect(() => {
		axios(
			`http://api.giphy.com/v1/gifs/search?q=${SEARCH_QUERY}&api_key=${GIPHY_API_KEY}&limit=${RESULTS_LIMIT}`
		).then(res => {
			const memes = res.data.data;
			setMemes(memes);
		});
	}, []); // init array

	if (!memes.length) {
		return "Loading...";
	}

	return props.render(memes);
};

const UseEffect2 = () => {
	return (
		<div>
			<h3>Memes</h3>
			<DataLoader
				render={memes => {
					// debugger;
					return (
						<div className="items_grid">
							{memes.map(item => (
								<div key={item.id}>
									<iframe
										loading="lazy"
										src={item.embed_url}
										width="100%"
										height="100%"
										frameBorder="0"
										className="giphy-embed"
										allowFullScreen
									/>
								</div>
							))}
						</div>
					);
				}}
			/>
		</div>
	);
};

export default UseEffect2;
