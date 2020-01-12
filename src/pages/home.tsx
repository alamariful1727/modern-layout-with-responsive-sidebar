import React, { useState } from "react";
import { RightSidebar } from "../components/RightSidebar";
import { Icon } from "@blueprintjs/core";

export const Home = () => {
	const [showDialog, setShowDialog] = useState(false);
	return (
		<>
			<div>
				<h1>Home page</h1>
				<div>
					Open your form!!
					<Icon
						icon='add'
						iconSize={20}
						className='grow pointer tigrow-lightBlue ml2'
						onClick={() => setShowDialog(!showDialog)}
					/>
				</div>
			</div>
			{showDialog && (
				<RightSidebar
					onClose={() => {
						setShowDialog(!showDialog);
					}}
				>
					<div className='ph2'>
						<h1>Put your form component here!!</h1>
						<small>Click outside for collapse this section.</small>
					</div>
				</RightSidebar>
			)}
		</>
	);
};
