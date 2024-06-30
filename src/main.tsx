import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import PollVotePage from "./pages/poll-vote-page/PollVotePage.tsx";
import CreatePollPage from "./pages/create-poll-page/CreatePollPage.tsx";
import PollResultsPage from "./pages/poll-results-page/PollResultsPage.tsx";
import HomePage from "./pages/home-page/HomePage.tsx";
import NotFoundPage from "./pages/not-found-page/NotFoundPage.tsx";
import GenericErrorPage from "./components/generic-error-page/GenericErrorPage.tsx";
import SignUpPage from "./pages/sign-up-page/SignUpPage.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <GenericErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
				errorElement: <GenericErrorPage />,
			},
			{
				path: "/signup",
				element: <SignUpPage />,
				errorElement: <GenericErrorPage />,
			},
			{
				path: "/create-poll",
				element: <CreatePollPage />,
				errorElement: <GenericErrorPage />,
			},
			{
				path: "/:id",
				element: <PollVotePage />,
				errorElement: <GenericErrorPage />,
			},
			{
				path: "/:id/result",
				element: <PollResultsPage />,
				errorElement: <GenericErrorPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
				errorElement: <GenericErrorPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
