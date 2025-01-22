import { BrowserRouter, Route, Routes } from "react-router-dom";

import FindId from "./page/FindAccount/FindId";
import FindPw from "./page/FindAccount/FindPW";
import Home from "./page/Home/main";
import Join from "./page/Join/main";
import Login from "./page/Login/main";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/findid" element={<FindId />} />
                    <Route path="/findpw" element={<FindPw />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;
