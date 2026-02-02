import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import TryOn from "./pages/TryOn";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/tryon" element={<TryOn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
