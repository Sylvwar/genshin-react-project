import React from "react";
import { store } from "./context/store";
import { Provider } from "react-redux";
import Characters from "./pages/Characters";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/characters",
			element: <Characters />,
		},
		{
			path: "/weapons",
			element: <h1>weapons</h1>,
		},
	]);

	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}
