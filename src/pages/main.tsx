import { createRoot } from "react-dom/client";
import { StrictMode, Suspense } from "react";
import App from "./App";
import "./index.css";
// Import i18n configuration
import "./lib/i18n/config";

// Create a loading element
const LoadingElement = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-terminal text-flow">
    <div className="w-8 h-8 border-4 border-flow/30 border-t-flow rounded-full animate-spin"></div>
    <span className="ml-2 text-screentime font-sans">Loading translations...</span>
  </div>
);

// Render with Suspense for i18n lazy-loading
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<LoadingElement />}>
      <App />
    </Suspense>
  </StrictMode>
);