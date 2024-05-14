import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import CreatePollPage from "./pages/create-poll-page/CreatePollPage.tsx";
import PollVotePage from "./pages/poll-vote-page/PollVotePage.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/create-poll",
				element: <CreatePollPage />,
			},
			{
				path: "/:id",
				element: <PollVotePage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
