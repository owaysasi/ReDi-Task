import { Route, HashRouter, Routes } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import MenuItemDetails from "./components/MenuItem/MenuItemDetails.jsx";
import RestaurantView from "./views/RestaurantView.jsx";
import TastyPicksView from "./views/TastyPicksView.jsx";

import "./App.css";
import { TastyPicksProvider } from "./providers/TastyPicksProvider.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<RestaurantView />} />
        <Route path="/tasty-picks" element={<TastyPicksView />} />
        <Route path="/meals/:id" element={<MenuItemDetails />} />
        <Route path="/*" element={<p>404 Page not found</p>} />
      </Routes>
    </HashRouter>
  );
}

// Wrap App in an ErrorBoundary to help us with development bugs

export default function WrappedApp() {
  return (
    <TastyPicksProvider>
      {import.meta.env.MODE === "development" ? (
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      ) : (
        <App />
      )}
    </TastyPicksProvider>
  );
}
