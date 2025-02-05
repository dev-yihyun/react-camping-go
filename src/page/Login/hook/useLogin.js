import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const onInputId = (event) => {
        const { value } = event.target;
        setInputId(value);
    };

    const onInputPw = (event) => {
        const { value } = event.target;
        setInputPw(value);
    };

    const getUserInfo = async (userData) => {
        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ userData }),
        });
        if (!response.ok) {
            console.error(`오류: ${response.status}`);
            throw new Error("서버 요청 실패");
        }
        return response.json();
    };
    const setUserInfoSuccess = (data) => {
        if (data.success) {
            alert("로그인 완료! 메인 페이지로 이동합니다.");
            return navigate("/home");
        } else {
            alert("일치하는 정보가 없습니다.");
            setInputId("");
            setInputPw("");
        }
    };
    const setUserInfoError = (error) => {
        console.error(`오류: ${error}`);
        alert("서버요청 중 오류가 발생했습니다. 로그인으로 이동합니다.");
        navigate("/");
    };

    const loginMutation = useMutation({
        mutationFn: getUserInfo,
        onSuccess: setUserInfoSuccess,
        onError: setUserInfoError,
    });

    const onLogin = () => {
        if (!inputId.trim() || !inputPw.trim()) {
            setInputId("");
            setInputPw("");
            return alert("아이디와 비밀번호를 입력해 주세요.");
        }
        const userData = { inputId, inputPw };

        loginMutation.mutate(userData);
        setInputId("");
        setInputPw("");
    };

    return {
        inputId,
        inputPw,
        onInputId,
        onInputPw,
        onLogin,
    };
};
