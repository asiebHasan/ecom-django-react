import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShowAllPage from './pages/ShowAllPage';
import CategoriesPage from './pages/CategoriesPage'
export default function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" Component={HomePage} exact />
                <Route path="/products/:id" Component={ProductDetailsPage} />
                <Route path="/:gender/all" Component={ShowAllPage} />
                <Route path="/:gender/:category" Component={CategoriesPage}/>
            </Routes>

            <Footer />
        </Router>
    );
}
