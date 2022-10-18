import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { Create } from "../../pages/Create/Create";
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";

export const RouterApp = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ 
          <Navigate to="/login" /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/create" element={ <Create /> } />
          <Route path="/home/:username" element={ <Home /> } />
        </Routes>
    </BrowserRouter>
  )
}