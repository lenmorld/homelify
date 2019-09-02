import React, { useState } from "react";
import UseEffect from "./UseEffect";

const UseState = () => {
	// [this.state.count, this.setState(count)]
	const [count, setCount] = useState(0);
	const [user, setUser] = useState({
		name: "Lenny",
		id: 1
	});

	// page of the results
	const [page, setPage] = useState(1);

	// expensive computation for lazy
	// const messageState = useState(() => expensiveComputation());

	// need to merge objects before updater function replaces, not merge updates

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>{count}</button>
			<h4>Use previous value</h4>
			<button onClick={() => setCount(prev => prev + 1)}>{count}</button>
			<div>
				<h3>
					{user.name} : {user.id}
				</h3>
				<input
					value={user.name}
					onChange={event => {
						const val = event.target.value;

						setUser(prev => {
							// debugger;
							return {
								...prev,
								name: val
							};
						});
					}}
				/>
			</div>
			<h5>Peoples</h5>
			<button onClick={() => setPage(page => page + 1)}>{page}</button>
			<UseEffect page={page} />
		</div>
	);
};

export default UseState;

/**
 * https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/
 */
