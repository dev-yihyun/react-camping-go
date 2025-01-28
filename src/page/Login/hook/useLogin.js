import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const onInputId = (event) => {
        setInputId(event.target.value);
    };

    const onInputPw = (event) => {
        setInputPw(event.target.value);
    };

    const onLogin = () => {
        if (!inputId.trim() || !inputPw.trim()) {
            return alert("아이디와 비밀번호를 입력해 주세요.");
        } else {
            return navigate("/home");
        }
    };

    return {
        inputId,
        inputPw,
        onInputId,
        onInputPw,
        onLogin,
    };
};
