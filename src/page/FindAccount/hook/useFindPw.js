import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";

export const useFindPw = () => {
    const [inputId, setInputId] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputCheckPw, setInputCheckPw] = useState("");
    const [inputPwErrorMessage, setInputPwErrorMessage] = useState("");
    const [isShow, setIsShow] = useState(false);
    const regexPw = /^[a-zA-Z0-9!@#$%^&*+\-=_?]*$/;
    const navigate = useNavigate();

    const [pwResult, setPwResult] = useState(false);

    const onInputId = (event) => {
        setInputId(event.target.value);
    };

    const onInputName = (event) => {
        setInputName(event.target.value);
    };

    const onInputPhone = (event) => {
        const formattedValue = formatPhoneNumber(event.target.value);
        setInputPhone(formattedValue);
    };

    const onInputEmail = (event) => {
        setInputEmail(event.target.value);
    };

    const onInputPw = (event) => {
        setInputPw(event.target.value);
        if (!regexPw.test(event.target.value)) {
            setInputPwErrorMessage(
                "비밀번호는 영어,숫자,특수문자(!@#$%^&*+-=_?)만 입력 가능합니다."
            );
        } else {
            setInputPwErrorMessage("");
        }
    };

    const onInputCheckPw = (event) => {
        setInputCheckPw(event.target.value);

        if (
            event.target.value !== inputPw ||
            !regexPw.test(event.target.value) ||
            !regexPw.test(inputPw)
        ) {
            setInputPwErrorMessage("비밀번호가 일치하지 않습니다.");
        } else {
            setInputPwErrorMessage("");
        }
    };

    const getUserByPw = async (userData) => {
        const response = await fetch("http://localhost:3001/findpw", {
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

    const setFindPwSuccess = (data) => {
        setIsShow(true);
        if (data.success) {
            setPwResult(true);
        } else {
            setPwResult(false);
        }
    };

    const setFindPwError = (error) => {
        console.error(`오류: ${error}`);
        alert("서버 요청 중 오류가 발생했습니다. 로그인으로 이동합니다.");
        navigate("/");
    };

    const findPwMutation = useMutation({
        mutationFn: getUserByPw,
        onSuccess: setFindPwSuccess,
        onError: setFindPwError,
    });

    const onFindPw = () => {
        const userData = {
            inputId,
            inputName,
            inputEmail,
            inputPhone,
        };
        findPwMutation.mutate(userData);
    };

    const isFormValid = () => {
        return (
            !inputId.trim() ||
            !inputName.trim() ||
            !inputPhone.trim() ||
            !inputEmail.trim() ||
            inputPhone.replace(/\D/g, "").length < 11
        );
    };

    return {
        inputId,
        inputName,
        inputPhone,
        inputEmail,
        inputPw,
        inputCheckPw,
        inputPwErrorMessage,
        isShow,
        regexPw,
        pwResult,
        onInputId,
        onInputName,
        onInputPhone,
        onInputEmail,
        onInputPw,
        onInputCheckPw,
        onFindPw,
        isFormValid,
    };
};
