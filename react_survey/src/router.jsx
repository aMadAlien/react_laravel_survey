import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard"
import Survey from "./views/Survey"
import Login from "./views/Login"
import Signup from "./views/Signup"
import GuestLayout from "./components/GuestLayout";

const router = createBrowserRouter([
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/survey',
        element: <Survey />
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