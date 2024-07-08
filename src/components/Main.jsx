import React from "react";

const Main = ({ data }) => {
	return (
		<div className="imgContainer">
			<img className="bgImage" src={data?.hdurl} alt={data?.title} />
		</div>
	);
};

export default Main;
