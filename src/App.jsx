import "./App.css";
import Favorities from "./pages/Favorities";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/Moviecontext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorities" element={<Favorities />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
