import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./modules/home/Home";
import About from "./modules/about/About";
import Projects from "./modules/projects/Projects";
import Contact from "./modules/contact/Contact";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);
