import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios(url).then(res => {
			setData(res.data);
		});
	}, []);

	return data;
}
