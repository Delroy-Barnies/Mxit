import App from "./components/App";

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/:section",
        element: <App />
    },
    {
        path: "/:section/:id",
        element: <App />
    }]

export default routes;