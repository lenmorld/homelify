/**
 * useEffect part1
 *
 * fundamentals of effects for data fetching
 */

import React, { useState, useEffect } from "react";

import Card from "./Card";

const UseEffect = props => {
	const [users, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);

	const { page } = props;

	useEffect(() => {
		console.log("ha");
	}, []);

	// useEffect replaces componentDidMount and componentWillMount
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then(res => res.json())
			.then(data => {
				// debugger;
				setPosts(data);
			});
	}, []);

	// empty deps runs only once, like componentDidMount

	// useEffect replaces componentDidMount and componentWillMount
	useEffect(() => {
		fetch(`https://reqres.in/api/users?page=${page}`)
			.then(res => res.json())
			.then(data => {
				// debugger;
				setUsers(data);
			});
	}, [page]);
	// runs when the props in [] change

	return (
		<div>
			{posts
				? posts.slice(0, 5).map(post => <p key={post.id}>{post.body}</p>)
				: "Loading posts"}
			<hr />
			{users && users.data
				? users.data.slice(0, 5).map(user => <Card key={user.id} user={user} />)
				: "Loading users"}
		</div>
	);
};

export default UseEffect;
