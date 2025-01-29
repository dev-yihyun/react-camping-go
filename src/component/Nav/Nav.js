import React from "react";
import { IoPerson } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import "./css/Nav.css";

function Nav({ type = "home" }) {
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
                        안녕하세요 <span className="userID">사용자</span>님
                    </div>

                    <a href="/#" className="usermenuicon" aria-label="Logout">
                        <SlLogout />
                    </a>
                </div>
            </nav>
        </>
    );
}

export default React.memo(Nav);
