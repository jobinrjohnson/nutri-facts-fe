import './App.css';
import LoginPage from "./pages/login/LoginPage"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductListUpload from './pages/productList_upload/productListUpload';
import ProductList from './pages/productList/productList';
import ProductListSelect from './pages/productListSelect/productListSelect';

function App() {
    return (<BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/" element={<ProductList/>}/>
                <Route path="/upload" element={<ProductListUpload/>}/>
                <Route path="/pselect" element={<ProductListSelect/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
