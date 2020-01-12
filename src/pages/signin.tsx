import React from "react";
import { NavLink } from "react-router-dom";
export const SignIn = () => {
	return (
		<div>
			<NavLink
				exact
				className='mt6'
				style={{ color: "dimgray" }}
				activeStyle={{
					background: "#3F61C5",
					color: "white"
				}}
				to={`/`}
			>
				Login
			</NavLink>
		</div>
	);
};
