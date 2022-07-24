import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "./Pages/About";
import Posts from "./Pages/Posts";
import Error from "./Pages/Error";
import PostIdPage from "./Pages/PostIdPage";
import Login from "./Pages/Login";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}>
            </Route>
            <Route path="/about" element={<About/>}>
            </Route>
            <Route path="/posts" element={<Posts/>}>
            </Route>
            <Route path="/posts/:id" element={<PostIdPage/>}>
            </Route>
            <Route path="/error" element={<Error/>}>
            </Route>
        </Routes>
    );
};

export default AppRouter;