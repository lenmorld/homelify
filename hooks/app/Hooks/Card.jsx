import React from "react";

const Card = props => {
	const { user } = props;
	return (
		<div
			style={{
				border: "1px solid gray",
				borderRadius: "5px",
				width: "300px",
				margin: "15px"
			}}
		>
			<div>
				<img
					loading="lazy"
					src={user.avatar}
					style={{
						width: "100%",
						height: "auto"
					}}
				/>
			</div>
			<div style={{ border: "1px solid gray", padding: "10px" }}>
				<div>
					{user.first_name} {user.last_name}
				</div>
				<div>{user.email}</div>
			</div>
		</div>
	);
};

export default Card;
