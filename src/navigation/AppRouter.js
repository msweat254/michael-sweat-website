import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CalendarPage from "../pages/calendar-demo/calendar-demo.js";
import HomePage from "../pages/home/home.js";

const AppRouter = () => {
  return (
    <Router>
      <div className="app-layout">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar-demo" element={<CalendarPage />} />
            {/* Add more pages here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
