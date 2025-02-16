import {createBrowserRouter} from "react-router-dom"

import App from "../App"
import Home from "../components/pages/Home"

export const app = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                Component: Home,
                title: "Home",
            },
        ],
    },
])
