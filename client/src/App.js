import { Route, Routes } from "react-router-dom";
import CreateProduct from "./pages/Product/CreateProduct";
import Product from "./pages/Product/Product";
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Shop from "./pages/Shop/Shop";
import './App.css';
import { Toast } from "react-bootstrap";

function App() {

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={ <Shop /> } />
        <Route path="/admin/product" element={ <Product /> } />
        <Route path="/admin/product/create" element={ <CreateProduct /> } />
      </Routes>

    </>
  );
}

export default App;
