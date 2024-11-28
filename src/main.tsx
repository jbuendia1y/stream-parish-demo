import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ContextsWrapper } from "./providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextsWrapper />
  </StrictMode>
);
