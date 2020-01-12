import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticate } from "./stores/UtilsActions";
import { SignIn } from "./pages/signin";
import { Home } from "./pages/home";
import { Layout } from "./components/Layout";

const PrivateRoute = (props: {
	component: any;
	path: string;
	exact: boolean;
}) => {
	return (
		<Route
			path={props.path}
			exact={props.exact}
			render={() =>
				isAuthenticate() ? (
					<Layout Component={props.component} />
				) : (
					<Redirect to='/signin' />
				)
			}
		/>
	);
};

export const App = () => (
	<BrowserRouter>
		<Switch>
			<Route
				exact
				path='/signin'
				render={() => (isAuthenticate() ? <Redirect to='/' /> : <SignIn />)}
			/>
			<PrivateRoute path='/' exact={true} component={Home} />
		</Switch>
	</BrowserRouter>
);
