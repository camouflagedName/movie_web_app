import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Test from "./components/test";
import App from "../src/components/Main";
import MoviePage from "./components/MoviePage";

export default function RouteIndex() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/movieInfo" exact element={<MoviePage />} />
            </Routes>
        </Router>
    )
}