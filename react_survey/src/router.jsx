import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./views/Dashboard"
import Survey from "./views/Survey"
import Login from "./views/Login"
import Signup from "./views/Signup"
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Navigate to="/dashboard" />
            },
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/survey',
                element: <Survey />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
])

export default router;