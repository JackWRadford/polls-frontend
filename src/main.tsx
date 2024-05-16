import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import PollVotePage from "./pages/poll-vote-page/PollVotePage.tsx";
import CreatePollPage from "./pages/create-poll-page/CreatePollPage.tsx";
import PollResultsPage from "./pages/poll-results-page/PollResultsPage.tsx";
import HomePage from "./pages/home-page/HomePage.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <HomePage /> },
			{
				path: "/create-poll",
				element: <CreatePollPage />,
			},
			{
				path: "/:id",
				element: <PollVotePage />,
			},
			{
				path: "/:id/result",
				element: <PollResultsPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
