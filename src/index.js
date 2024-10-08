import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------

// Select the root element from the HTML document
const rootElement = document.querySelector("#root");

// Throw an error if the root element is not found
if (!rootElement) throw new Error("Failed to find the root element");

// Create a root to manage the React component rendering
const root = createRoot(rootElement);

// Render the MainContent component inside the root element
root.render(<MainContent />);
