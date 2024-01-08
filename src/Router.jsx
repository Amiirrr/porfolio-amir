import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/home";
import Home from "@/pages/home";
import Test from "@/pages/test/test";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Test />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
