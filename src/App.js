import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div className="flex flex-col justify-between h-screen">
                        <Navbar />

                        <main>
                            <div className="container mx-auto mb-8 px-4 xl:px-24">
                                <Routes>
                                    <Route exact path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route
                                        path="/notfound"
                                        element={<NotFound />}
                                    />
                                    <Route path="/*" element={<NotFound />} />
                                </Routes>
                            </div>
                        </main>

                        <Footer />
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    );
}

export default App;
