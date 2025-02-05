import React from "react";
import { IoPerson } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import "./css/Nav.css";

function Nav({ type = "home", userId }) {
    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        alert("로그아웃되었습니다. 로그인 화면으로 돌아갑니다.");
        navigate("/");
    };

    return (
        <>
            <nav className={type === "home" ? "nav" : "nav backgroundHeader"}>
                <div className="homelogo">
                    <a href="/home">🏕️ Camping Go⛺</a>
                </div>
                <div className="usermenu">
                    <a href="/mypage" className="usermenuicon" aria-label="User Profile">
                        <IoPerson />
                    </a>

                    <div className="userinfo">
                        안녕하세요 <span className="userID">{userId}</span>님
                    </div>

                    <a href="/#" className="usermenuicon" aria-label="Logout" onClick={onLogout}>
                        <SlLogout />
                    </a>
                </div>
            </nav>
        </>
    );
}

export default React.memo(Nav);
