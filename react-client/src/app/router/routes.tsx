import { createBrowserRouter } from "react-router";
import App from "../layouts/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/forms/ActivityForm";
import HomePage from "../../features/home/HomePage";
import ActivityDetailPage from "../../features/activities/details/ActivityDetailPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path:'', element: <HomePage />},
            {path:'activities', element: <ActivityDashboard />},
            {path:'activities/:id', element: <ActivityDetailPage />},
            {path:'createActivity', element: <ActivityForm key='create' />},
            {path:'manage/:id', element: <ActivityForm />}
        ]
    }
])