import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import CreatePoll from "./routes/create-poll/CreatePoll.tsx";
import PollPage from "./routes/poll-page/PollPage.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/create-poll",
				element: <CreatePoll />,
			},
			{
				path: "/:id",
				element: <PollPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
