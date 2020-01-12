import React, { useState } from "react";
import { connect } from "react-redux";
import { Icon } from "@blueprintjs/core";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface LayoutProps {
	Component: React.ComponentClass | React.StatelessComponent;
}

interface LayoutInternalProps extends LayoutProps, RouteComponentProps {
	rightSidebarOpen?: boolean;
}

const LayoutComponent = (props: LayoutInternalProps) => {
	const [leftOpen, setLeftOpen] = useState(true);

	return (
		<div className='cf vh-100' style={{ background: "#060517" }}>
			<div className='flex overflow-hidden'>
				<div className='w-100 border-box'>
					<div
						id='main-layout'
						className={`flex relative ${props.rightSidebarOpen &&
							"main-layout-overlay"}`}
					>
						{/* left-sidebar starts */}
						<div
							className='relative '
							style={{
								transition: "width 0.4s",
								width: leftOpen ? "15%" : "3%"
							}}
						>
							<div
								style={{
									transform: leftOpen ? "translateX(0%)" : "translateX(-100%)",
									msTransform: leftOpen ? "" : "translateX(-100%)",
									WebkitTransition: leftOpen ? "" : "translateX(-100%)",
									opacity: leftOpen ? "1" : "0"
								}}
								className='white flex items-center justify-center h-100'
							>
								<h1>Sidebar</h1>
							</div>
						</div>
						{/* left-sidebar ends */}

						{/* middle-layout starts */}
						<div className='flex-grow-1 bg-tigrow relative br3 mv1'>
							<span
								className='pointer absolute bp3-icon z-3 top-1 left--1'
								onClick={() => setLeftOpen(!leftOpen)}
							>
								<Icon
									className='br-100 w2 bg-tigrow'
									color='#0FA3A3'
									icon={leftOpen ? "circle-arrow-left" : "circle-arrow-right"}
									iconSize={30}
								/>
							</span>

							<div
								className='flex flex-column'
								style={{
									height: "calc(100vh - 0.7rem)"
								}}
							>
								<div className='flex-grow-1 overflow-y-auto pt4 pl2'>
									<props.Component />
								</div>
							</div>
						</div>
						{/* middle-layout ends */}

						{/* right-sidebar starts */}
						<div
							className='relative'
							style={{
								transition: "width 0.4s",
								width: props.rightSidebarOpen ? "30%" : "0%",
								zIndex: 5
							}}
						>
							<div
								id='rightSidebar'
								className='h-100 c-tigrowWhite'
								style={{
									background: "rgb(6, 5, 23)",
									opacity: props.rightSidebarOpen ? "1" : "0"
								}}
							></div>
						</div>
						{/* right-sidebar ends */}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		rightSidebarOpen: state.layoutReducer.rightSidebar.open
	};
};

export const Layout = connect(
	mapStateToProps,
	null
)(withRouter(LayoutComponent));
