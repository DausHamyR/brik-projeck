import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailProduct from "./pages/DetailProduct";
import AddProduct from "./pages/AddProduct";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react'

const App = ()=> {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/detailProduct/:id" element={<DetailProduct />} />
                        <Route path="/addProduct" element={<AddProduct />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App