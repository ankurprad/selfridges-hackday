import "./App.css";
import Product from "./components/Product";
import Subscribe from "./components/Subscribe";
import SubscribeConf from "./components/SubscribeConf";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/subscribeconfirm" element={<SubscribeConf />} />
      </Routes>
    </>
  );
}

export default App;
