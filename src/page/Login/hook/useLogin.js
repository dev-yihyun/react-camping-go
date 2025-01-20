import { useState } from "react";

export const useLogin = () => {
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
