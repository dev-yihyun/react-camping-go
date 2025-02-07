import { BrowserRouter, Route, Routes } from "react-router-dom";

import CampInfo from "./page/CampInfo/main";
import FindId from "./page/FindAccount/FindId";
import FindPw from "./page/FindAccount/FindPW";
import Home from "./page/Home/main";
import Join from "./page/Join/main";
import Login from "./page/Login/main";
import MyPage from "./page/MyPage/main";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/findid" element={<FindId />} />
                    <Route path="/findpw" element={<FindPw />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/campinfo" element={<CampInfo />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/campinfo/:contentId" element={<CampInfo />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;
