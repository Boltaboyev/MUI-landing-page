import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {RouterProvider} from "react-router-dom"

import {app} from "./router"

import "./index.css"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={app} />
    </StrictMode>
)
