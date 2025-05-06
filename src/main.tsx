import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reports from "./pages/Reports.tsx";
import Incidents from "./pages/Incidents.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import AIAssistant from "./pages/AIAssiatant.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Incidents /> },
      { path: "/Reports", element: <Reports /> },
      { path: "/AIAssistant", element: <AIAssistant /> },
      { path: "/Dashboard", element: <Dashboard /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
