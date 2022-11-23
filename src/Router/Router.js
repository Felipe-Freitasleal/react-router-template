import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage"
import {ErroPage} from "../pages/ErroPage";
import {LoginPage} from "../pages/LoginPage"


export function Router () {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/profile/:name" element={<ProfilePage/>}/>
                <Route path="*" element={<ErroPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}
